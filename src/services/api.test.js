import fetchData from "./api";

test("Verificar se o fetchData está funcionando corretamete", async () => {
  const response = await fetchData();
  expect(response).toBeDefined();
  expect(response.data).toBe("Dados retornados da API");
});

// jest.mock("./api", () => {
//   return {
//     __esModule: true,
//     default: jest.fn((id) => {
//       if (id) {
//         return Promise.resolve({
//           data: "DADOS RETORNADOS DO MOCK",
//         });
//       } else {
//         return Promise.resolve({
//           error: { code: 404, mensage: "error" },
//         });
//       }
//     }),
//   };
// });

// test("Verificar se o fetchData está retornando o dado corretamente", async () => {
//   const response = await fetchData(2);
//   expect(response.data).toBe("DADOS RETORNADOS DO MOCK");
// });

// test("Verificar se o fetchData está retornando ERRO corretamente", async () => {
//   const response = await fetchData();
//   expect(response.error).toBeDefined();
//   expect(response.error.code).toBe(404);
//   expect(response.error.mensage).toBe("error");
// });
