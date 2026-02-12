#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'docs', 'terms.json');

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
];

function parseTerm(filePath, domain, domainLabel) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const id = path.basename(filePath, '.md');

  // 標題行: # 術語名稱 — 一句話定義
  const titleMatch = raw.match(/^#\s+(.+)/m);
  if (!titleMatch) return null;

  const titleLine = titleMatch[1];
  let title = titleLine;
  let oneLine = '';

  // 用 — 或 - 分隔標題和定義
  const sepMatch = titleLine.match(/^(.+?)\s*[—–-]\s*(.+)$/);
  if (sepMatch) {
    title = sepMatch[1].trim();
    oneLine = sepMatch[2].trim();
  }

  // 白話說
  const metaphorMatch = raw.match(/>\s*\*\*白話說[：:]\*\*\s*(.+)/);
  const metaphor = metaphorMatch ? metaphorMatch[1].trim() : '';

  // 完整內容轉 HTML（移除第一行標題，因為會在 UI 中另外顯示）
  const contentWithoutTitle = raw.replace(/^#\s+.+\n*/m, '');
  const content = marked(contentWithoutTitle);

  return {
    id,
    title,
    oneLine,
    metaphor,
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

  fs.writeFileSync(OUT, JSON.stringify(terms, null, 0), 'utf-8');

  const sizeKB = (fs.statSync(OUT).size / 1024).toFixed(1);
  console.log(`✅ 已生成 ${OUT}`);
  console.log(`   共 ${terms.length} 個術語，檔案大小 ${sizeKB} KB`);
}

main();
