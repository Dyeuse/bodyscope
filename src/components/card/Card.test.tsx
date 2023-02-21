import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component testing suite", () => {
  it("should render a functional card", () => {
    render(
      <Card
        title="Test"
        definition="A short explanation or definition"
        value="88"
        position="1"
      />
    );

    const frontTitle = screen.getByRole("heading", { name: "Test" });
    const result = screen.getByText(/88/);
    const backTitle = screen.getByRole("heading", { name: "Stand for" });
    const definition = screen.getByText(/A short explanation or definition/);
    const flipButton = screen.getByAltText(/Double arrows/);

    expect(frontTitle).toBeVisible();
    expect(result).toBeVisible();
    expect(backTitle).not.toBeVisible();
    expect(definition).not.toBeVisible();

    fireEvent.click(flipButton);

    expect(frontTitle).not.toBeVisible();
    expect(result).not.toBeVisible();
    expect(backTitle).toBeVisible();
    expect(definition).toBeVisible();
  });

  it("should match with the previous snapshot", () => {
    const card = render(
      <Card
        title="Test"
        definition="A short explanation or definition"
        value="88"
        position="1"
      />
    );

    expect(card).toMatchInlineSnapshot(`
      {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="_card_c39673"
              style="font-size: 20px; grid-area: c1;"
            >
              <div
                class="_front_c39673 "
                data-testid="front"
              >
                <h2>
                  Test
                </h2>
                <p>
                  88
                </p>
              </div>
              <div
                class="_back_c39673 _hidden_c39673"
                data-testid="back"
              >
                <h3>
                  Stand for
                </h3>
                <p>
                  A short explanation or definition
                </p>
              </div>
              <button
                type="button"
              >
                <img
                  alt="Double arrows"
                  class="_inverted_c39673"
                  src="src/media/flip.svg"
                />
              </button>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="_card_c39673"
            style="font-size: 20px; grid-area: c1;"
          >
            <div
              class="_front_c39673 "
              data-testid="front"
            >
              <h2>
                Test
              </h2>
              <p>
                88
              </p>
            </div>
            <div
              class="_back_c39673 _hidden_c39673"
              data-testid="back"
            >
              <h3>
                Stand for
              </h3>
              <p>
                A short explanation or definition
              </p>
            </div>
            <button
              type="button"
            >
              <img
                alt="Double arrows"
                class="_inverted_c39673"
                src="src/media/flip.svg"
              />
            </button>
          </div>
        </div>,
        "debug": [Function],
        "findAllByAltText": [Function],
        "findAllByDisplayValue": [Function],
        "findAllByLabelText": [Function],
        "findAllByPlaceholderText": [Function],
        "findAllByRole": [Function],
        "findAllByTestId": [Function],
        "findAllByText": [Function],
        "findAllByTitle": [Function],
        "findByAltText": [Function],
        "findByDisplayValue": [Function],
        "findByLabelText": [Function],
        "findByPlaceholderText": [Function],
        "findByRole": [Function],
        "findByTestId": [Function],
        "findByText": [Function],
        "findByTitle": [Function],
        "getAllByAltText": [Function],
        "getAllByDisplayValue": [Function],
        "getAllByLabelText": [Function],
        "getAllByPlaceholderText": [Function],
        "getAllByRole": [Function],
        "getAllByTestId": [Function],
        "getAllByText": [Function],
        "getAllByTitle": [Function],
        "getByAltText": [Function],
        "getByDisplayValue": [Function],
        "getByLabelText": [Function],
        "getByPlaceholderText": [Function],
        "getByRole": [Function],
        "getByTestId": [Function],
        "getByText": [Function],
        "getByTitle": [Function],
        "queryAllByAltText": [Function],
        "queryAllByDisplayValue": [Function],
        "queryAllByLabelText": [Function],
        "queryAllByPlaceholderText": [Function],
        "queryAllByRole": [Function],
        "queryAllByTestId": [Function],
        "queryAllByText": [Function],
        "queryAllByTitle": [Function],
        "queryByAltText": [Function],
        "queryByDisplayValue": [Function],
        "queryByLabelText": [Function],
        "queryByPlaceholderText": [Function],
        "queryByRole": [Function],
        "queryByTestId": [Function],
        "queryByText": [Function],
        "queryByTitle": [Function],
        "rerender": [Function],
        "unmount": [Function],
      }
    `);
  });
});
