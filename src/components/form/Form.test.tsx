import { render, screen } from "@testing-library/react";
import { UserDataProvider } from "../../contexts/UserDataContext";
import Form from "./Form";

describe("Form component testing suite", () => {
  it("should render a form ", () => {
    render(
      <UserDataProvider>
        <Form />
      </UserDataProvider>
    );

    const male = screen.getByRole("radio", { name: "male" });
    const body = screen.getByRole("combobox", { name: "Body Fat Percentage" });
    const neck = screen.getByRole("spinbutton", { name: "neck (cm)" });
    const button = screen.getByRole("button", { name: "calculate" });

    expect(male).toBeVisible();
    expect(body).toBeVisible();
    expect(body).toHaveDisplayValue("auto calc");
    expect(neck).toBeVisible();
    expect(button).toBeVisible();
  });

  it("should match with the previous snapshot", () => {
    const form = render(
      <UserDataProvider>
        <Form />
      </UserDataProvider>
    );

    expect(form).toMatchInlineSnapshot(`
      {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <form
              class="_formContainer_5052f4"
            >
              <div
                class="_dataWrapper_5052f4"
              >
                <div
                  class="_optionsContainer_e7a281"
                >
                  <div
                    class="_interRadioWrapper_e7a281"
                  >
                    <div
                      class="_intraRadioWrapper_e7a281"
                    >
                      <div>
                        <input
                          checked=""
                          id="english"
                          name="language"
                          type="radio"
                          value="english"
                        />
                        <label
                          for="english"
                        >
                          english
                        </label>
                      </div>
                      <div>
                        <input
                          id="français"
                          name="language"
                          type="radio"
                          value="french"
                        />
                        <label
                          for="français"
                        >
                          français
                        </label>
                      </div>
                    </div>
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
                  <div
                    class="_selectWrapper_e7a281"
                  >
                    <label
                      for="activity"
                    >
                      Physical activity
                    </label>
                    <select
                      id="activity"
                      name="activity"
                    >
                      <option
                        value="1.2"
                      >
                        sedentary
                      </option>
                      <option
                        value="1.375"
                      >
                        lightly active
                      </option>
                      <option
                        value="1.55"
                      >
                        moderately active
                      </option>
                      <option
                        value="1.725"
                      >
                        very active
                      </option>
                      <option
                        value="1.9"
                      >
                        extremely active
                      </option>
                    </select>
                  </div>
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
                        auto calc
                      </option>
                      <option
                        value="specific"
                      >
                        specific
                      </option>
                    </select>
                  </div>
                </div>
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
              <button
                type="submit"
              >
                calculate
              </button>
            </form>
          </div>
        </body>,
        "container": <div>
          <form
            class="_formContainer_5052f4"
          >
            <div
              class="_dataWrapper_5052f4"
            >
              <div
                class="_optionsContainer_e7a281"
              >
                <div
                  class="_interRadioWrapper_e7a281"
                >
                  <div
                    class="_intraRadioWrapper_e7a281"
                  >
                    <div>
                      <input
                        checked=""
                        id="english"
                        name="language"
                        type="radio"
                        value="english"
                      />
                      <label
                        for="english"
                      >
                        english
                      </label>
                    </div>
                    <div>
                      <input
                        id="français"
                        name="language"
                        type="radio"
                        value="french"
                      />
                      <label
                        for="français"
                      >
                        français
                      </label>
                    </div>
                  </div>
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
                <div
                  class="_selectWrapper_e7a281"
                >
                  <label
                    for="activity"
                  >
                    Physical activity
                  </label>
                  <select
                    id="activity"
                    name="activity"
                  >
                    <option
                      value="1.2"
                    >
                      sedentary
                    </option>
                    <option
                      value="1.375"
                    >
                      lightly active
                    </option>
                    <option
                      value="1.55"
                    >
                      moderately active
                    </option>
                    <option
                      value="1.725"
                    >
                      very active
                    </option>
                    <option
                      value="1.9"
                    >
                      extremely active
                    </option>
                  </select>
                </div>
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
                      auto calc
                    </option>
                    <option
                      value="specific"
                    >
                      specific
                    </option>
                  </select>
                </div>
              </div>
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
            <button
              type="submit"
            >
              calculate
            </button>
          </form>
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
