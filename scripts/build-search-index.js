#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = path.resolve(__dirname, '..');
const DOCS = path.join(ROOT, 'docs');
const OUT_INDEX = path.join(DOCS, 'terms-index.json');
const OUT_CONTENT = path.join(DOCS, 'terms-content.json');
// 保留舊檔以利向下相容（GitHub Actions 等）
const OUT_LEGACY = path.join(DOCS, 'terms.json');

const DOMAINS = [
  { dir: 'software-engineering', label: '💻 軟體工程' },
  { dir: 'stock', label: '💹 股票投資' },
  { dir: 'electronics', label: '🔬 電子產業' },
  { dir: 'marketing', label: '📣 行銷企劃' },
  { dir: 'design', label: '🎨 美術設計' },
  { dir: 'management', label: '💼 企業管理' },
  { dir: 'data-analytics', label: '📊 數據分析' },
  { dir: 'gambling', label: '🎲 博弈' },
  { dir: 'game-design', label: '🎮 遊戲設計' },
  { dir: 'legal', label: '📜 法務與智慧財產' },
  { dir: 'hr', label: '👥 人力資源' },
  { dir: 'audio-visual', label: '🔊 影音與動畫' },
  { dir: 'project-management', label: '📋 專案管理' },
  { dir: 'crypto', label: '🪙 加密貨幣 / Web3' },
  { dir: 'ai-ml', label: '🤖 AI / 機器學習' },
  { dir: 'finance-accounting', label: '💰 財務會計' },
  { dir: 'ux-product', label: '🧩 UX / 產品設計' },
];

/**
 * 從 Markdown 中提取中文別名（用於搜尋）
 * 抓取模式：
 *   1. 標題括號中的中文：# Blockchain（區塊鏈）
 *   2.「」內的中文術語名稱（前後有「叫」「稱」「是」等關鍵字）
 *   3. 全名翻譯：中文叫「XXX」、中文是「XXX」
 */
function extractAliases(raw, title) {
  const aliases = new Set();

  // 1. 標題中的中文括號內容：# Term（中文名）或 # Term (中文名)
  const titleParenMatch = raw.match(/^#\s+.+?[（(]([^）)]+)[）)]/m);
  if (titleParenMatch) {
    aliases.add(titleParenMatch[1].trim());
  }

  // 2. 中文叫「XXX」/ 中文是「XXX」/ 中文稱為「XXX」
  const zhNamePatterns = [
    /中文叫「([^」]+)」/g,
    /中文(?:名)?(?:稱|是|叫做|叫作)「([^」]+)」/g,
    /(?:又|也|俗|簡)稱「([^」]+)」/g,
    /縮寫.*?[，,].*?[「]([^」]+)[」]/g,
  ];
  for (const pat of zhNamePatterns) {
    let m;
    while ((m = pat.exec(raw)) !== null) {
      aliases.add(m[1].trim());
    }
  }

  // 3. 全名在括號中：**XXX（中文全名）**
  const fullNameMatches = raw.matchAll(/\*\*[A-Za-z][^*]*[（(]([^）)]+)[）)][^*]*\*\*/g);
  for (const m of fullNameMatches) {
    const inner = m[1].trim();
    // 只保留含中文的
    if (/[\u4e00-\u9fff]/.test(inner)) {
      aliases.add(inner);
    }
  }

  // 去除跟 title 完全相同的
  aliases.delete(title);

  return [...aliases].join(' ');
}

function parseTerm(filePath, domain, domainLabel) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const id = path.basename(filePath, '.md');

  // 標題行: # 術語名稱 — 一句話定義
  const titleMatch = raw.match(/^#\s+(.+)/m);
  if (!titleMatch) return null;

  const titleLine = titleMatch[1];
  let title = titleLine;
  let oneLine = '';

  // 用 — 或 – 分隔標題和定義（不含普通連字號 -，避免拆開 1-on-1 等術語名）
  const sepMatch = titleLine.match(/^(.+?)\s*[—–]\s*(.+)$/);
  if (sepMatch) {
    title = sepMatch[1].trim();
    oneLine = sepMatch[2].trim();
  }

  // 白話說
  const metaphorMatch = raw.match(/>\s*\*\*白話說[：:]\*\*\s*(.+)/);
  const metaphor = metaphorMatch ? metaphorMatch[1].trim() : '';

  // 中文別名
  const aliases = extractAliases(raw, title);

  // 完整內容轉 HTML（移除第一行標題，因為會在 UI 中另外顯示）
  const contentWithoutTitle = raw.replace(/^#\s+.+\n*/m, '');
  const content = marked(contentWithoutTitle);

  return {
    id,
    title,
    oneLine,
    metaphor,
    aliases,
    domain,
    domainLabel,
    content,
  };
}

function main() {
  const terms = [];

  for (const { dir, label } of DOMAINS) {
    const termsDir = path.join(ROOT, dir, 'terms');
    if (!fs.existsSync(termsDir)) {
      console.warn(`⚠️  找不到 ${termsDir}，跳過`);
      continue;
    }

    const files = fs.readdirSync(termsDir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const term = parseTerm(path.join(termsDir, file), dir, label);
      if (term) terms.push(term);
    }
  }

  // 按標題排序
  terms.sort((a, b) => a.title.localeCompare(b.title, 'zh-Hant'));

  // === 輸出 1：輕量搜尋索引（不含 content）===
  const indexData = terms.map(({ content, ...rest }) => rest);
  fs.writeFileSync(OUT_INDEX, JSON.stringify(indexData, null, 0), 'utf-8');

  // === 輸出 2：內容對應表（domain/id → content）===
  // 用 domain/id 當 key，避免跨領域同名術語（如 bias、mcp、token）互相覆蓋
  const contentMap = {};
  terms.forEach(t => { contentMap[`${t.domain}/${t.id}`] = t.content; });
  fs.writeFileSync(OUT_CONTENT, JSON.stringify(contentMap, null, 0), 'utf-8');

  // === 輸出 3：保留舊格式（向下相容）===
  fs.writeFileSync(OUT_LEGACY, JSON.stringify(terms, null, 0), 'utf-8');

  const indexKB = (fs.statSync(OUT_INDEX).size / 1024).toFixed(1);
  const contentKB = (fs.statSync(OUT_CONTENT).size / 1024).toFixed(1);
  const legacyKB = (fs.statSync(OUT_LEGACY).size / 1024).toFixed(1);

  console.log(`✅ 已生成搜尋索引`);
  console.log(`   共 ${terms.length} 個術語`);
  console.log(`   terms-index.json   ${indexKB} KB（搜尋用）`);
  console.log(`   terms-content.json ${contentKB} KB（內容用）`);
  console.log(`   terms.json         ${legacyKB} KB（向下相容）`);

  // 統計別名
  const withAliases = terms.filter(t => t.aliases).length;
  console.log(`   ${withAliases} 個術語含中文別名`);
}

main();
