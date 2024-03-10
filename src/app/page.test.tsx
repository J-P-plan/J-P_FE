import { render, screen } from "@testing-library/react";

import Page from "./page";

describe("Page", () => {
  beforeEach(() => {
    render(<Page />);
  });

  it("should render a level 1 heading", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("should display 'Hello World' in the level 1 heading", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Hello World"
    );
  });
});
