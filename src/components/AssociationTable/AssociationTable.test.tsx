import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import userEvent from "@testing-library/user-event";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { AssociationTable } from ".";
import {
  mockData,
  mockEmptyData,
  mockSingleData,
} from "../../test/mock/associationList";
import { scoreData } from "../../test/mock/scoreById";

test("renders top association list", async () => {
  render(
    <MockedProvider addTypename={false} mocks={[mockData]}>
      <AssociationTable />
    </MockedProvider>
  );

  await waitForElementToBeRemoved(() =>
    screen.queryByTestId("loading-spinner")
  );

  expect(screen.getByText(/GATAD2B/i)).toBeInTheDocument();
  expect(screen.getByText(/TFPI/i)).toBeInTheDocument();
});

test("renders graph when button pressed", async () => {
  render(
    <MockedProvider addTypename={false} mocks={[mockSingleData, scoreData]}>
      <AssociationTable />
    </MockedProvider>
  );

  await waitForElementToBeRemoved(() =>
    screen.queryByTestId("loading-spinner")
  );

  expect(screen.getByText(/TFPI/i)).toBeInTheDocument();
  const btn = screen.getByTestId("expand-ENSG00000003436");
  userEvent.click(btn);

  await waitForElementToBeRemoved(() =>
    screen.queryByTestId("loading-spinner")
  );

  await new Promise((resolve) => setTimeout(resolve, 0));

  expect(screen.getByTestId("radargraph")).toBeInTheDocument();
});

test("change graph when button pressed", async () => {
  render(
    <MockedProvider addTypename={false} mocks={[mockSingleData, scoreData]}>
      <AssociationTable />
    </MockedProvider>
  );

  await waitForElementToBeRemoved(() =>
    screen.queryByTestId("loading-spinner")
  );

  expect(screen.getByText(/TFPI/i)).toBeInTheDocument();
  const btn = screen.getByTestId("expand-ENSG00000003436");
  userEvent.click(btn);

  await waitForElementToBeRemoved(() =>
    screen.queryByTestId("loading-spinner")
  );

  await new Promise((resolve) => setTimeout(resolve, 0));

  userEvent.click(screen.getByTestId("radargraph"));
  
  expect(screen.getByTestId("bargraph")).toBeInTheDocument();
});

test("renders no items message", async () => {
  render(
    <MockedProvider addTypename={false} mocks={[mockEmptyData]}>
      <AssociationTable />
    </MockedProvider>
  );

  await waitForElementToBeRemoved(() =>
    screen.queryByTestId("loading-spinner")
  );

  expect(screen.getByText(/No Items/i)).toBeInTheDocument();
});
