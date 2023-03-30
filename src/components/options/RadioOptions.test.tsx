import { render, screen } from "@testing-library/react";
import RadioOptions from "./RadioOptions";

function renderRadioOptions() {
  return render(
    <RadioOptions
      onChange={() => {}}
      name="gender"
      choice1="male"
      value1="male"
      choice2="female"
      value2="female"
      userChoice="male"
    />
  );
}

describe("RadioOptions component testing suite", () => {
  it("should render a set of two radio inputs", () => {
    renderRadioOptions();
    const male = screen.getByLabelText(/^male$/i, {
      selector: 'input[type="radio"]',
    });
    const female = screen.getByLabelText(/^female$/i, {
      selector: 'input[type="radio"]',
    });
    expect(male).toBeVisible();
    expect(male).toBeChecked();
    expect(female).toBeVisible();
    expect(female).not.toBeChecked();
  });

  it("should match with the previous snapshot", () => {
    const radioOptions = renderRadioOptions();
    expect(radioOptions).toMatchInlineSnapshot(`
      {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="_intraRadioWrapper_e7a281"
            >
              <div>
                <input
                  checked=""
                  id="male"
                  name="gender"
                  type="radio"
                  value="male"
                />
                <label
                  for="male"
                >
                  male
                </label>
              </div>
              <div>
                <input
                  id="female"
                  name="gender"
                  type="radio"
                  value="female"
                />
                <label
                  for="female"
                >
                  female
                </label>
              </div>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="_intraRadioWrapper_e7a281"
          >
            <div>
              <input
                checked=""
                id="male"
                name="gender"
                type="radio"
                value="male"
              />
              <label
                for="male"
              >
                male
              </label>
            </div>
            <div>
              <input
                id="female"
                name="gender"
                type="radio"
                value="female"
              />
              <label
                for="female"
              >
                female
              </label>
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
