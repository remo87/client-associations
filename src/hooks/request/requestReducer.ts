import { IRequestState } from "./requestTypes";
import { CONSTANTS } from ".";

export const requestReducer = (
  state: IRequestState,
  action: any
): IRequestState => {
  const { type, payload } = action;
  switch (type) {
    case CONSTANTS.LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case CONSTANTS.SET_DATA: {
      return {
        loading: false,
        data: payload,
        error: undefined,
      };
    }
    case CONSTANTS.REJECTED: {
      return {
        loading: false,
        data: undefined,
        error: payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};
