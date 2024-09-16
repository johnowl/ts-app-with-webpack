import { expect, test } from "@jest/globals";
import { getMessage } from "./message";

test("Message should be 'Hello World'", () => {
  const message = getMessage();
  expect(message).toBe("Hello, world!");
});
