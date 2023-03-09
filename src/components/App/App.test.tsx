import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render head", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "BodyScope" })).toBeVisible();
  });
});
