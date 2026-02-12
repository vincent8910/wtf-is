#!/usr/bin/env node

/**
 * 術語品質檢查工具
 * 檢查所有 terms/*.md 是否符合格式規範：
 *   - 必要段落：標題行（# + —）、白話說、它到底是什麼、生活比喻、為什麼要知道
 *   - 內部連結是否指向存在的檔案
 *   - 檔案命名是否為 kebab-case
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const DOMAINS = [
  'software-engineering', 'stock', 'electronics', 'marketing', 'design',
  'management', 'data-analytics', 'gambling', 'game-design', 'legal',
  'hr', 'audio-visual', 'project-management', 'crypto',
  'ai-ml', 'finance-accounting', 'ux-product',
];

const REQUIRED_SECTIONS = [
  { pattern: /^#\s+.+\s*[—–-]\s*.+/m, label: '標題行（# 術語 — 一句話定義）' },
  { pattern: />\s*\*\*白話說[：:]\*\*/m, label: '白話說區塊' },
  { pattern: /##\s*它到底是什麼/m, label: '「它到底是什麼？」段落' },
  { pattern: /##\s*(?:生活比喻|實際例子|生活中|日常場景|常見場景|怎麼|實際應用)/m, label: '「生活比喻 / 實際例子」段落' },
  { pattern: /##\s*為什麼/m, label: '「為什麼要知道這個詞？」段落' },
];

let totalFiles = 0;
let totalErrors = 0;
let totalWarnings = 0;

function validateFile(filePath, allTermIds) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath, '.md');
  const relPath = path.relative(ROOT, filePath);
  const errors = [];
  const warnings = [];

  // 1. 檔名 kebab-case 檢查
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(fileName) && fileName !== 'CLAUDE') {
    warnings.push(`檔名非 kebab-case: ${fileName}`);
  }

  // 2. 必要段落檢查
  for (const { pattern, label } of REQUIRED_SECTIONS) {
    if (!pattern.test(raw)) {
      errors.push(`缺少 ${label}`);
    }
  }

  // 3. 回到總覽連結檢查
  if (!/\[.*回到.*\]\(\.\.\/README\.md\)/.test(raw)) {
    warnings.push('缺少「回到總覽」連結');
  }

  // 4. 內部 .md 連結檢查
  const linkMatches = raw.matchAll(/\[([^\]]*)\]\(([^)]+\.md)\)/g);
  for (const m of linkMatches) {
    const linkTarget = m[2];
    // 跳過 README 連結
    if (linkTarget.includes('README.md')) continue;

    // 解析相對路徑
    const targetPath = path.resolve(path.dirname(filePath), linkTarget);
    if (!fs.existsSync(targetPath)) {
      errors.push(`斷連結: [${m[1]}](${linkTarget}) → 檔案不存在`);
    }
  }

  // 5. 檔案長度檢查（太短可能內容不足）
  const lineCount = raw.split('\n').length;
  if (lineCount < 15) {
    warnings.push(`內容可能太短（僅 ${lineCount} 行）`);
  }

  if (errors.length || warnings.length) {
    console.log(`\n📄 ${relPath}`);
    errors.forEach(e => console.log(`   ❌ ${e}`));
    warnings.forEach(w => console.log(`   ⚠️  ${w}`));
  }

  totalErrors += errors.length;
  totalWarnings += warnings.length;
}

function main() {
  // 收集所有存在的 term IDs
  const allTermIds = new Set();
  for (const domain of DOMAINS) {
    const termsDir = path.join(ROOT, domain, 'terms');
    if (!fs.existsSync(termsDir)) continue;
    const files = fs.readdirSync(termsDir).filter(f => f.endsWith('.md'));
    files.forEach(f => allTermIds.add(path.basename(f, '.md')));
  }

  // 驗證每個術語檔案
  for (const domain of DOMAINS) {
    const termsDir = path.join(ROOT, domain, 'terms');
    if (!fs.existsSync(termsDir)) continue;

    const files = fs.readdirSync(termsDir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      totalFiles++;
      validateFile(path.join(termsDir, file), allTermIds);
    }
  }

  // 摘要
  console.log('\n' + '='.repeat(50));
  console.log(`📊 驗證結果：共 ${totalFiles} 個術語檔案`);
  console.log(`   ❌ ${totalErrors} 個錯誤`);
  console.log(`   ⚠️  ${totalWarnings} 個警告`);

  if (totalErrors > 0) {
    console.log('\n💡 錯誤表示缺少必要內容，建議修正。');
    process.exit(1);
  } else if (totalWarnings > 0) {
    console.log('\n✅ 無錯誤，但有一些建議可改善。');
  } else {
    console.log('\n✅ 全部通過！');
  }
}

main();
