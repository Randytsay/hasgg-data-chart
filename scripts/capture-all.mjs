import { chromium } from 'playwright';

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

  // 1440px screenshot
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.screenshot({
    path: `docs/design-references/hasgg/${name}/1440.png`,
    fullPage: true
  });

  // 390px screenshot
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({
    path: `docs/design-references/hasgg/${name}/390.png`,
    fullPage: true
  });

  // Extract page content
  const title = await page.title();
  const h1 = await page.$eval('h1', el => el.textContent).catch(() => '');
  const descriptions = await page.$$eval('p', els => els.map(el => el.textContent).filter(t => t && t.length > 20)).catch(() => []);

  console.log(`\n=== ${name} ===`);
  console.log(`Title: ${title}`);
  console.log(`H1: ${h1}`);
  console.log(`Description paragraphs: ${descriptions.length}`);

  await page.close();
}

await browser.close();
console.log('\nAll done!');