import { isPasswordValid } from "@/utils/password";

describe("F2 - Validação de Senha (Função)", () => {
  it("deve aceitar senha forte com mais de 8 caracteres", () => {
    expect(isPasswordValid("Senha@1234")).toBe(true);
  });

  it("deve rejeitar senha com menos de 8 caracteres", () => {
    expect(isPasswordValid("Ab@123")).toBe(false);
  });

  // ==================== TESTE DE BUG ====================
  it("[BUG] deve aceitar senha com EXATAMENTE 8 caracteres", () => {
    // "Abc@1234" tem exatamente 8 caracteres + todos os critérios
    expect(isPasswordValid("Abc@1234")).toBe(true);
    // Este teste vai falhar enquanto o bug (<= 8) existir
  });
});
