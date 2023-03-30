import { render, screen } from "@testing-library/react";
import SelectOptions from "./SelectOptions";

function renderSelectOptions() {
  return render(
    <SelectOptions
      name="bodyFat"
      options={[
        { label: "calc auto", value: "auto" },
        { label: "spécifique", value: "specific" },
      ]}
      selectedValue="auto"
      onChange={() => {}}
    >
      Body Fat Percentage
    </SelectOptions>
  );
}

describe("SelectOptions component testing suite", () => {
  it("should render a select tag", () => {
    renderSelectOptions();

    const bodyFatSelect = screen.getByLabelText(/Body Fat Percentage/i, {
      selector: "select",
    });
    const bodyFatOptions = screen.getAllByRole("option");

    expect(bodyFatSelect).toBeVisible();
    expect(bodyFatSelect).toHaveValue("auto");
    expect(bodyFatOptions.length).toEqual(2);
  });

  it("should match with the previous snapshot", () => {
    const selectOptions = renderSelectOptions();
    expect(selectOptions).toMatchInlineSnapshot(`
      {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="_selectWrapper_e7a281"
            >
              <label
                for="bodyFat"
              >
                Body Fat Percentage
              </label>
              <select
                id="bodyFat"
                name="bodyFat"
              >
                <option
                  value="auto"
                >
                  calc auto
                </option>
                <option
                  value="specific"
                >
                  spécifique
                </option>
              </select>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="_selectWrapper_e7a281"
          >
            <label
              for="bodyFat"
            >
              Body Fat Percentage
            </label>
            <select
              id="bodyFat"
              name="bodyFat"
            >
              <option
                value="auto"
              >
                calc auto
              </option>
              <option
                value="specific"
              >
                spécifique
              </option>
            </select>
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
