import React from "react";
import userEvent from "@testing-library/user-event";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { handlers } from "./handlers/server-handlers";
import { AssociationTable } from "../components/AssociationTable";
import { mockEmptyData } from "./mock/associationList";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("renders top association list", async () => {
  render(<AssociationTable />);

  await waitForElementToBeRemoved(() =>
    screen.queryByTestId("loading-spinner")
  );

  // eslint-disable-next-line testing-library/no-debugging-utils
  // screen.debug()

  expect(screen.getByText(/GATAD2B/i)).toBeInTheDocument();
  expect(screen.getByText(/TFPI/i)).toBeInTheDocument();
});

test("renders graph when button pressed", async () => {
  render(<AssociationTable />);

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
  render(<AssociationTable />);

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
  server.use(
    rest.get(
      "http://localhost:8090/api/associations",
      async (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(mockEmptyData)
        );
      }
    )
  );

  render(<AssociationTable />);

  await waitForElementToBeRemoved(() =>
    screen.queryByTestId("loading-spinner")
  );

  expect(screen.getByText(/No Items/i)).toBeInTheDocument();
});
