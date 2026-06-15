import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "@/components/Input";

describe("F4 - Componente Input", () => {
  it("deve renderizar label e placeholder", () => {
    render(<Input label="E-mail" placeholder="seu@email.com" />);
    expect(screen.getByText("E-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("seu@email.com")).toBeInTheDocument();
  });

  it("deve mostrar mensagem de erro", () => {
    render(<Input error="Campo obrigatório" />);
    expect(screen.getByText("Campo obrigatório")).toBeInTheDocument();
  });
});
