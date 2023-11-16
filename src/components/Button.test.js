import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("Botão renderiza a label corretamente", () => {
  render(<Button label="Clique-me" />);
  const button = screen.getByText("Clique-me");
  expect(button).toBeDefined();
});

test("Clique no botão funciona corretamente", () => {
  const fakeFunc = jest.fn();
  const { getByText } = render(<Button label="Clique-me" clique={fakeFunc} />);
  const button = getByText("Clique-me");
  fireEvent.click(button);
  expect(fakeFunc).toHaveBeenCalledTimes(1);
});
