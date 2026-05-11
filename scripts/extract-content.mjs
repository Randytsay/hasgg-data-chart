import { chromium } from 'playwright';
import fs from 'fs';

const pages = [
  { url: 'https://www.hasgg.com/k-line-chart-creation', name: 'k-line-chart-creation' },
  { url: 'https://www.hasgg.com/vertical-line-chart-creation', name: 'vertical-line-chart-creation' },
  { url: 'https://www.hasgg.com/bump-chart-creation', name: 'bump-chart-creation' },
  { url: 'https://www.hasgg.com/line-function-chart-creation', name: 'line-function-chart-creation' },
  { url: 'https://www.hasgg.com/line-polar-chart-creation', name: 'line-polar-chart-creation' }
];

const browser = await chromium.launch({ headless: true });

for (const { url, name } of pages) {
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle' });

  // Extract all computed CSS for body
  const bodyStyles = await page.evaluate(() => {
    const el = document.body;
    const styles = getComputedStyle(el);
    return {
      fontFamily: styles.fontFamily,
      fontSize: styles.fontSize,
      backgroundColor: styles.backgroundColor,
      color: styles.color,
      margin: styles.margin,
      padding: styles.padding,
    };
  });

  // Get all form inputs
  const formFields = await page.$$eval('input, textarea, select', els =>
    els.map(el => ({
      type: el.type || el.tagName,
      name: el.name,
      id: el.id,
      placeholder: el.placeholder,
      value: el.value,
    }))
  );

  // Get all buttons
  const buttons = await page.$$eval('button', els => els.map(el => el.textContent?.trim()));

  // Get all links
  const navLinks = await page.$$eval('nav a', els => els.map(el => ({ text: el.textContent?.trim(), href: el.href })));

  // Get the main content area
  const mainContent = await page.$eval('main, [role="main"], .content, article', el => el.innerHTML).catch(() => '');

  // Get table data
  const tableData = await page.$$eval('table', tables => {
    return tables.map(table => {
      const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent?.trim());
      const rows = Array.from(table.querySelectorAll('tr')).slice(1).map(tr =>
        Array.from(tr.querySelectorAll('td')).map(td => td.textContent?.trim())
      );
      return { headers, rows };
    });
  });

  const doc = {
    url,
    name,
    title: await page.title(),
    h1: await page.$eval('h1', el => el.textContent).catch(() => ''),
    bodyStyles,
    formFields,
    buttons,
    navLinks,
    tableData,
    mainContent: mainContent.substring(0, 500), // First 500 chars
  };

  fs.writeFileSync(`docs/research/hasgg/${name}-content.json`, JSON.stringify(doc, null, 2));
  console.log(`Captured ${name}`);

  await page.close();
}

await browser.close();
console.log('All done!');