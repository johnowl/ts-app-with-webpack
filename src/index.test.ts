import { expect, test } from "@jest/globals";

test(`Message should be 'Hello, world!'`, () => {
  document.body.innerHTML = `<div id="app"></div>`;
  require(`./index`);
  expect(document.body.innerHTML).toBe(`<div id="app">Hello, world!</div>`);
});
