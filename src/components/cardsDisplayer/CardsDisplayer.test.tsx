import { fireEvent, render, screen } from "@testing-library/react";
import CardsDisplayer from "./CardsDisplayer";

describe("CardsDisplayer component testing suite", () => {
  it("should render a functional cards displayer", () => {
    render(<CardsDisplayer />);

    const allTitles = screen.getAllByRole("heading");
    const backTitles = screen.getAllByRole("heading", { name: /Acronym/ });
    const BMITitle = screen.getByRole("heading", { name: /BMI/ });
    const flipButtons = screen.getAllByAltText(/Double arrows/);

    expect(allTitles.length).toEqual(10);
    expect(backTitles.length).toEqual(5);
    expect(flipButtons.length).toEqual(5);
    expect(BMITitle).toBeVisible();
    expect(backTitles[0]).not.toBeVisible();

    fireEvent.click(flipButtons[0]);

    expect(BMITitle).not.toBeVisible();
    expect(backTitles[0]).toBeVisible();
  });

  it("should match with the previous snapshot", () => {
    const cardsDisplayer = render(<CardsDisplayer />);

    expect(cardsDisplayer).toMatchInlineSnapshot(`
      {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="_cardsContainer_a7b8fb"
            >
              <div
                class="_card_c39673"
                style="font-size: 15px; width: 150px;"
              >
                <div
                  class="_front_c39673 "
                  data-testid="front"
                >
                  <h2>
                    BMI
                  </h2>
                  <p>
                    ---
                  </p>
                </div>
                <div
                  class="_back_c39673 _hidden_c39673"
                  data-testid="back"
                >
                  <h3>
                    Acronym
                  </h3>
                  <p>
                    Body Mass Index
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Body_mass_index"
                    rel="noreferrer"
                    target="_blank"
                  >
                    ?
                  </a>
                </div>
                <button
                  type="button"
                >
                  <img
                    alt="Double arrows"
                    class="_inverted_c39673"
                    src="flip.svg"
                  />
                </button>
              </div>
              <div
                class="_card_c39673"
                style="font-size: 15px; width: 150px;"
              >
                <div
                  class="_front_c39673 "
                  data-testid="front"
                >
                  <h2>
                    BFP
                  </h2>
                  <p>
                    ---
                  </p>
                </div>
                <div
                  class="_back_c39673 _hidden_c39673"
                  data-testid="back"
                >
                  <h3>
                    Acronym
                  </h3>
                  <p>
                    Body Fat Percentage
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Body_fat_percentage"
                    rel="noreferrer"
                    target="_blank"
                  >
                    ?
                  </a>
                </div>
                <button
                  type="button"
                >
                  <img
                    alt="Double arrows"
                    class="_inverted_c39673"
                    src="flip.svg"
                  />
                </button>
              </div>
              <div
                class="_card_c39673"
                style="font-size: 15px; width: 150px;"
              >
                <div
                  class="_front_c39673 "
                  data-testid="front"
                >
                  <h2>
                    FFMI
                  </h2>
                  <p>
                    ---
                  </p>
                </div>
                <div
                  class="_back_c39673 _hidden_c39673"
                  data-testid="back"
                >
                  <h3>
                    Acronym
                  </h3>
                  <p>
                    Fat Free Mass Index (ajusted)
                  </p>
                  <a
                    href="https://egym.com/us/blog/fat-free-mass-index-ffmi"
                    rel="noreferrer"
                    target="_blank"
                  >
                    ?
                  </a>
                </div>
                <button
                  type="button"
                >
                  <img
                    alt="Double arrows"
                    class="_inverted_c39673"
                    src="flip.svg"
                  />
                </button>
              </div>
              <div
                class="_card_c39673"
                style="font-size: 15px; width: 150px;"
              >
                <div
                  class="_front_c39673 "
                  data-testid="front"
                >
                  <h2>
                    BMR
                  </h2>
                  <p>
                    ---
                  </p>
                </div>
                <div
                  class="_back_c39673 _hidden_c39673"
                  data-testid="back"
                >
                  <h3>
                    Acronym
                  </h3>
                  <p>
                    Basal Metabolic Rate
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Basal_metabolic_rate"
                    rel="noreferrer"
                    target="_blank"
                  >
                    ?
                  </a>
                </div>
                <button
                  type="button"
                >
                  <img
                    alt="Double arrows"
                    class="_inverted_c39673"
                    src="flip.svg"
                  />
                </button>
              </div>
              <div
                class="_card_c39673"
                style="font-size: 15px; width: 150px;"
              >
                <div
                  class="_front_c39673 "
                  data-testid="front"
                >
                  <h2>
                    TDEE
                  </h2>
                  <p>
                    ---
                  </p>
                </div>
                <div
                  class="_back_c39673 _hidden_c39673"
                  data-testid="back"
                >
                  <h3>
                    Acronym
                  </h3>
                  <p>
                    Total Daily Energy Expenditure
                  </p>
                  <a
                    href="https://www.k-state.edu/paccats/Contents/PA/PDF/Physical%20Activity%20and%20Controlling%20Weight.pdf"
                    rel="noreferrer"
                    target="_blank"
                  >
                    ?
                  </a>
                </div>
                <button
                  type="button"
                >
                  <img
                    alt="Double arrows"
                    class="_inverted_c39673"
                    src="flip.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="_cardsContainer_a7b8fb"
          >
            <div
              class="_card_c39673"
              style="font-size: 15px; width: 150px;"
            >
              <div
                class="_front_c39673 "
                data-testid="front"
              >
                <h2>
                  BMI
                </h2>
                <p>
                  ---
                </p>
              </div>
              <div
                class="_back_c39673 _hidden_c39673"
                data-testid="back"
              >
                <h3>
                  Acronym
                </h3>
                <p>
                  Body Mass Index
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Body_mass_index"
                  rel="noreferrer"
                  target="_blank"
                >
                  ?
                </a>
              </div>
              <button
                type="button"
              >
                <img
                  alt="Double arrows"
                  class="_inverted_c39673"
                  src="flip.svg"
                />
              </button>
            </div>
            <div
              class="_card_c39673"
              style="font-size: 15px; width: 150px;"
            >
              <div
                class="_front_c39673 "
                data-testid="front"
              >
                <h2>
                  BFP
                </h2>
                <p>
                  ---
                </p>
              </div>
              <div
                class="_back_c39673 _hidden_c39673"
                data-testid="back"
              >
                <h3>
                  Acronym
                </h3>
                <p>
                  Body Fat Percentage
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Body_fat_percentage"
                  rel="noreferrer"
                  target="_blank"
                >
                  ?
                </a>
              </div>
              <button
                type="button"
              >
                <img
                  alt="Double arrows"
                  class="_inverted_c39673"
                  src="flip.svg"
                />
              </button>
            </div>
            <div
              class="_card_c39673"
              style="font-size: 15px; width: 150px;"
            >
              <div
                class="_front_c39673 "
                data-testid="front"
              >
                <h2>
                  FFMI
                </h2>
                <p>
                  ---
                </p>
              </div>
              <div
                class="_back_c39673 _hidden_c39673"
                data-testid="back"
              >
                <h3>
                  Acronym
                </h3>
                <p>
                  Fat Free Mass Index (ajusted)
                </p>
                <a
                  href="https://egym.com/us/blog/fat-free-mass-index-ffmi"
                  rel="noreferrer"
                  target="_blank"
                >
                  ?
                </a>
              </div>
              <button
                type="button"
              >
                <img
                  alt="Double arrows"
                  class="_inverted_c39673"
                  src="flip.svg"
                />
              </button>
            </div>
            <div
              class="_card_c39673"
              style="font-size: 15px; width: 150px;"
            >
              <div
                class="_front_c39673 "
                data-testid="front"
              >
                <h2>
                  BMR
                </h2>
                <p>
                  ---
                </p>
              </div>
              <div
                class="_back_c39673 _hidden_c39673"
                data-testid="back"
              >
                <h3>
                  Acronym
                </h3>
                <p>
                  Basal Metabolic Rate
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Basal_metabolic_rate"
                  rel="noreferrer"
                  target="_blank"
                >
                  ?
                </a>
              </div>
              <button
                type="button"
              >
                <img
                  alt="Double arrows"
                  class="_inverted_c39673"
                  src="flip.svg"
                />
              </button>
            </div>
            <div
              class="_card_c39673"
              style="font-size: 15px; width: 150px;"
            >
              <div
                class="_front_c39673 "
                data-testid="front"
              >
                <h2>
                  TDEE
                </h2>
                <p>
                  ---
                </p>
              </div>
              <div
                class="_back_c39673 _hidden_c39673"
                data-testid="back"
              >
                <h3>
                  Acronym
                </h3>
                <p>
                  Total Daily Energy Expenditure
                </p>
                <a
                  href="https://www.k-state.edu/paccats/Contents/PA/PDF/Physical%20Activity%20and%20Controlling%20Weight.pdf"
                  rel="noreferrer"
                  target="_blank"
                >
                  ?
                </a>
              </div>
              <button
                type="button"
              >
                <img
                  alt="Double arrows"
                  class="_inverted_c39673"
                  src="flip.svg"
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
