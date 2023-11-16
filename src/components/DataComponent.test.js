import React from "react";
import { render } from "@testing-library/react";
import DataComponent from "./DataComponent";

jest.mock("../services/api", () => {
  return {
    __esModule: true,
    default: jest.fn(() =>
      Promise.resolve({ data: "DADOS RETORNADOS DO MOCK" })
    ),
  };
});

test("Verifica se o estado está sendo alterado corretamente", async () => {
  const { findByText } = render(<DataComponent />);
  const retornoDaAPI = await findByText("DADOS RETORNADOS DO MOCK");
  expect(retornoDaAPI).toBeDefined();
});
