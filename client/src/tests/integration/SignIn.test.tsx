import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignIn from "@/app/signin/page";

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

describe("F5 - Página de Login (Integração)", () => {
  it("deve mostrar os campos de email e senha", () => {
    render(<SignIn />);
    expect(screen.getByPlaceholderText("seu@email.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("••••••••")).toBeInTheDocument();
  });

  it("deve mostrar o botão Entrar", () => {
    render(<SignIn />);
    const main = screen.getByRole("main");
    expect(
      within(main).getByRole("button", { name: /entrar/i }),
    ).toBeInTheDocument();
  });
});
