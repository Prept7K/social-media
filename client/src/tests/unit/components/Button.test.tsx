import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@/components/Button";

describe("F3 - Componente Button", () => {
  it("deve renderizar o texto corretamente", () => {
    render(<Button>Entrar</Button>);
    expect(screen.getByText("Entrar")).toBeInTheDocument();
  });

  it("deve chamar a função onClick", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Clique aqui</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
