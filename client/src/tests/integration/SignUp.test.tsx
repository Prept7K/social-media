import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUp from "@/app/signup/page";

// Mock obrigatório do Next.js App Router
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
}));

// Mock do AuthContext
jest.mock("@/contexts/AuthContext", () => ({
  useAuth: () => ({
    user: null,
    isAuthenticated: false,
    login: jest.fn(),
    logout: jest.fn(),
  }),
}));

describe("F6 - Página de Cadastro (Integração)", () => {
  it("deve mostrar os campos de cadastro", () => {
    render(<SignUp />);
    expect(screen.getByPlaceholderText("seuemail.com")).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText("••••••••")).toHaveLength(2);
  });

  it("deve mostrar o botão Criar Conta", () => {
    render(<SignUp />);
    const main = screen.getByRole("main");
    expect(
      within(main).getByRole("button", { name: /criar conta/i }),
    ).toBeInTheDocument();
  });
});
