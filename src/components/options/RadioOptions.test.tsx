import { render, screen } from "@testing-library/react";
import RadioOptions from "./RadioOptions";

describe("RadioOptions component testing suite", () => {
  it("should render a set of two radio inputs", () => {
    render(<RadioOptions name="test" choice1="foo" choice2="baz" />);
    const foo = screen.getByLabelText(/foo/i, {
      selector: 'input[type="radio"]',
    });
    const baz = screen.getByLabelText(/baz/i, {
      selector: 'input[type="radio"]',
    });
    expect(foo).toBeVisible();
    expect(foo).toBeChecked();
    expect(baz).toBeVisible();
    expect(baz).not.toBeChecked();
  });

  it("should match with the previous snapshot", () => {
    const radioOptions = render(
      <RadioOptions name="test" choice1="foo" choice2="baz" />
    );
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
                  id="foo"
                  name="test"
                  type="radio"
                />
                <label
                  for="foo"
                >
                  foo
                </label>
              </div>
              <div>
                <input
                  id="baz"
                  name="test"
                  type="radio"
                />
                <label
                  for="baz"
                >
                  baz
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
                id="foo"
                name="test"
                type="radio"
              />
              <label
                for="foo"
              >
                foo
              </label>
            </div>
            <div>
              <input
                id="baz"
                name="test"
                type="radio"
              />
              <label
                for="baz"
              >
                baz
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
