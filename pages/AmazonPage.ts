import { Page, Locator } from '@playwright/test';

export class AmazonPage {
  private page: Page;
  
  // Locators
  private searchBox: Locator;
  private searchButton: Locator;
  private tShirtsLink: Locator;
  private productList: Locator;
  private shadedShortSleeveProduct: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // Initialize locators
    this.searchBox = page.locator('input[aria-label="Search Amazon"]');
    this.searchButton = page.locator('input[value="Go"]');
    this.tShirtsLink = page.locator('a:has-text("T-shirts")');
    this.productList = page.locator('[data-component-type="s-search-result"]');
    this.shadedShortSleeveProduct = page.locator('span:has-text("shaded short sleeve T-shirts")');
  }

  /**
   * Navigate to Amazon South Africa
   */
  async navigateToAmazon(): Promise<void> {
    await this.page.goto('https://www.amazon.co.za/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Search and select T-shirts category
   */
  async selectTShirts(): Promise<void> {
    // Wait for the page to load and search for T-shirts
    await this.searchBox.fill('T-shirts');
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Verify the shaded short sleeve T-shirts product is in the list
   */
  async verifyShadedShortSleeveTShirts(): Promise<boolean> {
    try {
      await this.shadedShortSleeveProduct.waitFor({ state: 'visible', timeout: 5000 });
      return await this.shadedShortSleeveProduct.isVisible();
    } catch (error) {
      console.error('Shaded short sleeve T-shirts not found in the list');
      return false;
    }
  }

  /**
   * Get the count of products displayed
   */
  async getProductCount(): Promise<number> {
    return await this.productList.count();
  }

  /**
   * Get product titles from the list
   */
  async getProductTitles(): Promise<string[]> {
    const titles = await this.productList.locator('h2 a span').allTextContents();
    return titles;
  }
}
