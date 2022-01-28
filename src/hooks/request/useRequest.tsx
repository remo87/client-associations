import { useEffect, useReducer } from "react";
import { CONSTANTS, requestReducer } from ".";
import { IRequestState } from "./requestTypes";

const initialState: IRequestState = {
  loading: false,
  data: undefined,
  error: undefined,
};

export const useRequest = (url: string) => {
  const [state, dispatch] = useReducer(requestReducer, initialState);

  const doRequest = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: CONSTANTS.SET_DATA, payload: data });
      } else {
        dispatch({ type: CONSTANTS.REJECTED, error: data });
      }
    } catch (err) {
      dispatch({ type: CONSTANTS.REJECTED, error: err });
    }
  };

  useEffect(() => {
    dispatch({ type: CONSTANTS.LOADING });
    doRequest(url);
  }, []);

  const { loading, data, error } = state;

  return { data, error, loading };
};
