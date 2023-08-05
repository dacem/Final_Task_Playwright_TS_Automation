import { Locator, Page, ElementHandle } from '@playwright/test';

export default class UIElementActions {
  constructor(private page: Page) {}

  private locator: Locator;
  private selector: string;

  /**
   *
   * @param selector Sets the locator using the provided selector
   * @returns
   */
  public setElement(selector: string): UIElementActions {
    this.selector = selector;
    this.locator = this.page.locator(this.selector);
    return this;
  }

  public getFirstLocator(): Locator {
    return this.locator.first();
  }

  public async waitTillVisible(timeout?: number): Promise<UIElementActions> {
    await this.getFirstLocator().waitFor({
      state: 'visible',
      timeout: (timeout = 10000 ?? 20000),
    });
    return this;
  }

  public async click(): Promise<UIElementActions> {
    await this.getFirstLocator().click();
    return this;
  }

  public async hover(): Promise<UIElementActions> {
    await this.getFirstLocator().hover();
    return this;
  }

  public async sendKeys(text: string): Promise<UIElementActions> {
    await this.getFirstLocator().type(text);
    return this;
  }

  public async getAllLocators(): Promise<Array<Locator>> {
    return await this.locator.all();
  }

  public async getAttribute(attribute: string): Promise<string> {
    return await this.locator.getAttribute(attribute);
  }

  public async getByAltText(text: string): Promise<any> {
    return await this.locator.getByAltText(text);
  }

  public async textContent(text: string): Promise<string> {
    return await this.locator.textContent();
  }
}
