import React from "react";
import { render, screen } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "Manchester",
    setSearchText: () => {},
    onSubmit: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("button displayes the correct text", () => {
    const { getByText } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(getByText("Search")).toBeInTheDocument;
  });
});
