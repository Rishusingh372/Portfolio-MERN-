import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const passwordSlice = createSlice({
  name: "password",
  initialState: {
    loading: false,
    error: null,
    message: null,
  },
  reducers: {
    forgotPassRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    forgotPassSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    },
    forgotPassFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
    },

    resetPassRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    resetPassSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    },
    resetPassFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
    },

    clearAllErrors(state, action) {
      state.error = null;
      state = state;
    },
  },
});

export const forgotPassword = (email) => async (dispatch) => {
  dispatch(passwordSlice.actions.forgotPassRequest());

  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/v1/user/password/forgot",
      { email },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(passwordSlice.actions.forgotPassSuccess(data.message));
    dispatch(passwordSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      passwordSlice.actions.forgotPassFailed(error.response.data.message)
    );
  }
};

export const resetPassword =
  (token, password, confirmPassword) => async (dispatch) => {
    dispatch(passwordSlice.actions.resetPassRequest());

    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/user/password/reset/${token}`,
        { password, confirmPassword },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch(passwordSlice.actions.resetPassSuccess(data.message));
      dispatch(passwordSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(
        passwordSlice.actions.resetPassFailed(error.response.data.message)
      );
    }
  };

export const clearAllPassErrors = () => (dispatch) => {
  dispatch(passwordSlice.actions.clearAllErrors());
};

export default passwordSlice.reducer;
