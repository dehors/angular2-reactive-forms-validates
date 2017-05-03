import { ReactiveFormValidatePage } from './app.po';

describe('reactive-form-validate App', () => {
  let page: ReactiveFormValidatePage;

  beforeEach(() => {
    page = new ReactiveFormValidatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
