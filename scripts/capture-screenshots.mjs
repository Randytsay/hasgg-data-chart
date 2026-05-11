import { chromium } from 'playwright';

const urls = [
  'https://www.hasgg.com/k-line-chart-creation',
  'https://www.hasgg.com/vertical-line-chart-creation',
  'https://www.hasgg.com/bump-chart-creation',
  'https://www.hasgg.com/line-function-chart-creation',
  'https://www.hasgg.com/line-polar-chart-creation'
];

const browser = await chromium.launch({ headless: true });

for (const url of urls) {
  const pageName = url.replace('https://www.hasgg.com/', '');
  const page = await browser.newPage();

  // 1440px screenshot
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(url);
  await page.waitForLoadState('networkidle');
  await page.screenshot({
    path: `docs/design-references/hasgg/${pageName}/1440.png`,
    fullPage: true
  });

  // 390px screenshot
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForLoadState('networkidle');
  await page.screenshot({
    path: `docs/design-references/hasgg/${pageName}/390.png`,
    fullPage: true
  });

  console.log(`Captured ${pageName}`);

  // Get page content for documentation
  const title = await page.title();
  const content = await page.content();
  console.log(`Title: ${title}`);

  await page.close();
}

await browser.close();
console.log('All screenshots captured');