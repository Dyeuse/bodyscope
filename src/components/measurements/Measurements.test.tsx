import { render, screen } from "@testing-library/react";
import { UserDataProvider } from "../../contexts/UserDataContext";
import Measurements from "./Measurements";

describe("Measurements component testing suite", () => {
  it("should render a set of measurement fields", () => {
    render(
      <UserDataProvider>
        <Measurements />
      </UserDataProvider>
    );
    const inputs = screen.getAllByRole("spinbutton");
    const height = screen.getByLabelText(/height/i, { selector: "input" });
    expect(inputs.length).toEqual(4);
    expect(height).toBeVisible();
  });

  it("should match with the previous snapshot", () => {
    const measurements = render(
      <UserDataProvider>
        <Measurements />
      </UserDataProvider>
    );
    expect(measurements).toMatchInlineSnapshot(`
      {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="_measurementsContainer_e7ee1f"
            >
              <div>
                <label
                  for="height"
                >
                  height (cm)
                </label>
                <input
                  id="height"
                  max="220"
                  min="100"
                  name="height"
                  type="number"
                  value=""
                />
              </div>
              <div>
                <label
                  for="weight"
                >
                  weight (kg)
                </label>
                <input
                  id="weight"
                  max="220"
                  min="30"
                  name="weight"
                  type="number"
                  value=""
                />
              </div>
              <div>
                <label
                  for="waist"
                >
                  waist (cm)
                </label>
                <input
                  id="waist"
                  max="220"
                  min="30"
                  name="waist"
                  type="number"
                  value=""
                />
              </div>
              <div>
                <label
                  for="neck"
                >
                  neck (cm)
                </label>
                <input
                  id="neck"
                  max="80"
                  min="20"
                  name="neck"
                  type="number"
                  value=""
                />
              </div>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="_measurementsContainer_e7ee1f"
          >
            <div>
              <label
                for="height"
              >
                height (cm)
              </label>
              <input
                id="height"
                max="220"
                min="100"
                name="height"
                type="number"
                value=""
              />
            </div>
            <div>
              <label
                for="weight"
              >
                weight (kg)
              </label>
              <input
                id="weight"
                max="220"
                min="30"
                name="weight"
                type="number"
                value=""
              />
            </div>
            <div>
              <label
                for="waist"
              >
                waist (cm)
              </label>
              <input
                id="waist"
                max="220"
                min="30"
                name="waist"
                type="number"
                value=""
              />
            </div>
            <div>
              <label
                for="neck"
              >
                neck (cm)
              </label>
              <input
                id="neck"
                max="80"
                min="20"
                name="neck"
                type="number"
                value=""
              />
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
