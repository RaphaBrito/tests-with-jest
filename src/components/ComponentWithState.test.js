import { render, fireEvent } from "@testing-library/react";
import ComponentWithState from "./ComponentWithState";

test("Verifica se o estado está sendo alterado corretamente", () => {
  const { getByText, queryByText } = render(<ComponentWithState />);
  const button = getByText("Mudar o Estado para true");

  expect(queryByText("O estado da flag foi para true")).toBeNull();
  fireEvent.click(button);
  expect(getByText("O estado da flag foi para true")).toBeDefined();
});
