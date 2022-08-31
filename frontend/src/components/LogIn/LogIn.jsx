import React, { useEffect } from "react";
import "./LogIn.css";
import { Box, Typography, TextField, Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { reset,login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const theme = createTheme({
  typography: {
    body1: {
      color: "red",
    },
  },
});

function LogIn() {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    console.log("use efectttttttttttt outttttttt");
    if (isError) {    
      toast.error(message);
    }
    if (isSuccess || user) {
      console.log("use efectttttttttttt");
      navigate("/");
    }
  }, [user, isError, isSuccess, message, dispatch, navigate]);

  const formik = useFormik({
    initialValues: {
      email: "",
     password: ""
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      console.log("ready to dispatch");
      dispatch(login(values));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <ThemeProvider theme={theme}>
          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={400}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={15}
            padding={3}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #051b34",
              },
            }}
          >
            <Typography variant="h4" padding={3} textAlign="center">
              Login
            </Typography>
            <TextField
              fullWidth
              type={"email"}
              margin="normal"
              variant="outlined"
              placeholder="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
            />
            {formik.errors.email ? (
              <Typography variant="body1">{formik.errors.email}</Typography>
            ) : null}
            <TextField
              fullWidth
              type={"password"}
              margin="normal"
              variant="outlined"
              placeholder="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
            />
            {formik.errors.password ? (
              <Typography variant="body1">{formik.errors.password}</Typography>
            ) : null}
            <Button
              type="submit"
              variant="contained"
              sx={{
                marginTop: "10px",
                backgroundColor: "#051b34",
                ":hover": { backgroundColor: "#27285C" },
              }}
            >
              Log In
            </Button>
          </Box>
        </ThemeProvider>
      </form>
    </>
  );
}

export default LogIn;
