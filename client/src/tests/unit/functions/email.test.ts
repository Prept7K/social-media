import { isEmailValid } from "@/utils/email";

describe("F1 - Validação de Email (Função)", () => {
  it("deve aceitar email válido", () => {
    expect(isEmailValid("felipe@email.com")).toBe(true);
  });

  it("deve rejeitar email inválido", () => {
    expect(isEmailValid("emailinvalido")).toBe(false);
  });

  it("deve rejeitar email vazio", () => {
    expect(isEmailValid("")).toBe(false);
  });
});
