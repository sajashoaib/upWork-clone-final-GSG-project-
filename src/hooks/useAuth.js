"use client";
import axios from "axios";
import { useReducer } from "react";
export const AUTH_ACTIONS = {
  AUTHORIZE: "AUTHORIZE",
  LOGOUT: "LOGOUT",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
};

const initialState = {
  token: typeof window !== "undefined" ? localStorage.getItem('token') : null,
  error: null,
  isLoading: false,
  isAuth: localStorage.getItem("isAuth") || false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  data: [],


};

const reduce = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_ACTIONS.AUTHORIZE:
      console.log("first");
      console.log(action.payload);
      const token =
        action?.payload?.token ||
        state?.token ||
        localStorage.getItem("upwork-token");
      localStorage.setItem("upwork-token", token);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", JSON.stringify(action.payload));

      return {
        ...state,
        token: token,
        error: null,
        isLoading: false,

      };

    case AUTH_ACTIONS.LOGOUT:
      typeof window !== "undefined" && localStorage.removeItem("upwork-token");
      return {
        token: null,
        error: null,
        isLoading: false,

      };
    case AUTH_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

const useAuth = () => {
  const [state, dispatch] = useReducer(reduce, initialState);
  const token = state.token || localStorage.getItem("upwork-token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  if (typeof window !== 'undefined') {
    console.log('we are running on the client')
} else {
    console.log('we are running on the server');
}

  const login = async (body) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      // const{ data }= await AuthLogin(body);
      const { data } = await axios.post(
        "https://react-tt-api.onrender.com/api/users/login",
        body
      );
      dispatch({
        type: AUTH_ACTIONS.AUTHORIZE,
        payload: data?.data?.token || data.token,
      });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  const signup = async (body) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      // const { data } = await AuthRegister(body);
      const { data } = await axios.post(
        "https://react-tt-api.onrender.com/api/users/signup",
        body
      );

      dispatch({
        type: AUTH_ACTIONS.AUTHORIZE,
        payload: data?.data?.token || data.token,
      });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  const logout = () => {
    localStorage.removeItem("upwork-token"); 

    dispatch({ type: AUTH_ACTIONS.LOGOUT });
  };

  return {
    ...state,
    login,
    signup,
    logout,
  };
};

export default useAuth;
