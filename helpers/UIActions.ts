import { Page } from '@playwright/test';
import UIElementActions from './UIElementActions';

export default class UIActions {
  constructor(private page: Page) {
    this.elementAction = new UIElementActions(page);
  }

  private elementAction: UIElementActions;
  locator;

  /**
   * Navigate to specified URL
   * @param URL
   */
  public async goto(URL: string): Promise<void> {
    await this.page.goto(URL, {
      timeout: 10000,
      waitUntil: 'load',
    });
  }

  /**
   * Returns the instance of UIElementsActions
   * @param selector
   * @returns
   */
  public element(selector: string): UIElementActions {
    return this.elementAction.setElement(selector);
  }

  public async timeout(seconds: number): Promise<void> {
    await this.page.waitForTimeout((seconds = 1000));
  }

  async textContent(): Promise<string> {
    return await this.locator.textContent();
  }
}
