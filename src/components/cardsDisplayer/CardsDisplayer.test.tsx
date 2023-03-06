import { fireEvent, render, screen } from "@testing-library/react";
import CardsDisplayer from "./CardsDisplayer";
import { get5FakeCards } from "../../utils/fakeCards";

describe("CardsDisplayer component testing suite", () => {
  it("should render a functional cards displayer", () => {
    render(<CardsDisplayer>{get5FakeCards()}</CardsDisplayer>);

    const frontTitles = screen.getAllByRole("heading", { name: /Test/ });
    const backTitles = screen.getAllByRole("heading", { name: /Stand for/ });
    const flipButtons = screen.getAllByAltText(/Double arrows/);

    expect(frontTitles.length).toEqual(5);
    expect(backTitles.length).toEqual(5);
    expect(flipButtons.length).toEqual(5);
    expect(frontTitles[2]).toBeVisible();
    expect(backTitles[2]).not.toBeVisible();

    fireEvent.click(flipButtons[2]);

    expect(frontTitles[2]).not.toBeVisible();
    expect(backTitles[2]).toBeVisible();
  });

  it("should match with the previous snapshot", () => {
    const cardsDisplayer = render(
      <CardsDisplayer>{get5FakeCards()}</CardsDisplayer>
    );

    expect(cardsDisplayer).toMatchInlineSnapshot(`
      {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="_grid_a7b8fb"
            >
              <div
                class="_card_c39673"
                style="font-size: 20px; grid-area: c1;"
              >
                <div
                  class="_front_c39673 "
                  data-testid="front"
                >
                  <h2>
                    Test1
                  </h2>
                  <p>
                    11
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
                    Test1 / short explanation or definition
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
              <div
                class="_card_c39673"
                style="font-size: 20px; grid-area: c2;"
              >
                <div
                  class="_front_c39673 "
                  data-testid="front"
                >
                  <h2>
                    Test2
                  </h2>
                  <p>
                    22
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
                    Test2 / short explanation or definition
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
              <div
                class="_card_c39673"
                style="font-size: 20px; grid-area: c3;"
              >
                <div
                  class="_front_c39673 "
                  data-testid="front"
                >
                  <h2>
                    Test3
                  </h2>
                  <p>
                    33
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
                    Test3 / short explanation or definition
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
              <div
                class="_card_c39673"
                style="font-size: 20px; grid-area: c4;"
              >
                <div
                  class="_front_c39673 "
                  data-testid="front"
                >
                  <h2>
                    Test4
                  </h2>
                  <p>
                    44
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
                    Test4 / short explanation or definition
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
              <div
                class="_card_c39673"
                style="font-size: 20px; grid-area: c5;"
              >
                <div
                  class="_front_c39673 "
                  data-testid="front"
                >
                  <h2>
                    Test5
                  </h2>
                  <p>
                    55
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
                    Test5 / short explanation or definition
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
          </div>
        </body>,
        "container": <div>
          <div
            class="_grid_a7b8fb"
          >
            <div
              class="_card_c39673"
              style="font-size: 20px; grid-area: c1;"
            >
              <div
                class="_front_c39673 "
                data-testid="front"
              >
                <h2>
                  Test1
                </h2>
                <p>
                  11
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
                  Test1 / short explanation or definition
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
            <div
              class="_card_c39673"
              style="font-size: 20px; grid-area: c2;"
            >
              <div
                class="_front_c39673 "
                data-testid="front"
              >
                <h2>
                  Test2
                </h2>
                <p>
                  22
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
                  Test2 / short explanation or definition
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
            <div
              class="_card_c39673"
              style="font-size: 20px; grid-area: c3;"
            >
              <div
                class="_front_c39673 "
                data-testid="front"
              >
                <h2>
                  Test3
                </h2>
                <p>
                  33
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
                  Test3 / short explanation or definition
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
            <div
              class="_card_c39673"
              style="font-size: 20px; grid-area: c4;"
            >
              <div
                class="_front_c39673 "
                data-testid="front"
              >
                <h2>
                  Test4
                </h2>
                <p>
                  44
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
                  Test4 / short explanation or definition
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
            <div
              class="_card_c39673"
              style="font-size: 20px; grid-area: c5;"
            >
              <div
                class="_front_c39673 "
                data-testid="front"
              >
                <h2>
                  Test5
                </h2>
                <p>
                  55
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
                  Test5 / short explanation or definition
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
