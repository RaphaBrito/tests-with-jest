import { add } from "./App";

test("Verificar se 1 + 1 é igual a 2", () => {
  expect(add(1, 1)).toBe(2);
});

test("Verificar se -1 + 1 é igual a 0", () => {
  expect(add(-1, 1)).toBe(0);
});

test("Verificar se 1 + (-1) é igual a 0", () => {
  expect(add(1, -1)).toBe(0);
});

test("Verificar se -1 + (-1) é igual a -2", () => {
  expect(add(-1, -1)).toBe(-2);
});
