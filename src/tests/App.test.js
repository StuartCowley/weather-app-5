import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  test("renders App component correctly", () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
