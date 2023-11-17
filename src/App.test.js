import { render } from "@testing-library/react";
import App, { add } from "./App";

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

jest.mock("./services/api", () => {
  return {
    __esModule: true,
    default: jest.fn(() =>
      Promise.resolve({ data: "DADOS RETORNADOS DO MOCK" })
    ),
  };
});

test("Verificar se o snapshot está correto", async () => {
  const { asFragment, findByText } = render(<App />);
  await findByText("DADOS RETORNADOS DO MOCK");
  expect(asFragment()).toMatchInlineSnapshot(`
  <DocumentFragment>
    <div
      class="App"
    >
      <h1>
        Olá! Vamos aprender a testar componentes!
      </h1>
      <h2>
        Vamos lá aprender!!
      </h2>
      <div>
        <button>
          Mudar o Estado para true
        </button>
      </div>
      <div>
        DADOS RETORNADOS DO MOCK
      </div>
    </div>
  </DocumentFragment>
  `);
});
