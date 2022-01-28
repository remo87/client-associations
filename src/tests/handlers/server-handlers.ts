import { rest } from "msw";
import { config } from "../../config";
import { mockAssociationsData } from "../mock/associationList";

const delay = process.env.NODE_ENV === "test" ? 0 : 1500;

export const handlers = [
  rest.get(
    'http://localhost:8090/api/associations',
    async (req, res, ctx) => {
      return res(
        ctx.delay(delay),
        ctx.status(200),
        ctx.json(mockAssociationsData)
      );
    }
  ),
];
