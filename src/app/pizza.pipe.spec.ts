import { PizzaPipe } from './pizza.pipe';

describe('PizzaPipe', () => {
  it('create an instance', () => {
    const pipe = new PizzaPipe();
    expect(pipe).toBeTruthy();
  });
});
