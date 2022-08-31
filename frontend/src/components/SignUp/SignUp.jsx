import React, { useEffect } from "react";
import "./SignUp.css";
import { useState } from "react";
import { Box, Typography, TextField, Button, Modal } from "@mui/material";
import { useFormik } from "formik";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { login, register, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Otp from "../otp/otp";

const theme = createTheme({
  typography: {
    body1: {
      color: "red",
    },
  },
});

const validate = (values) => {
  const errors = {};
  if (!values.firstname) {
    console.log("not value");
    errors.firstname = "Required";
  } else if (values.firstname.length > 15) {
    console.log("not length");
    errors.firstname = "Must be 15 characters or less";
  }

  if (!values.lastname) {
    errors.lastname = "Required";
  } else if (values.lastname.length > 20) {
    errors.lastname = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone_number) {
    errors.phone_number = "Required";
  } else if (values.phone_number.length < 10) {
    errors.phone_number = "phone number must be 10 numbers";
  } else if (values.phone_number.length > 10) {
    errors.phone_number = "phone number must be only 10 numbers";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "phone number must be 8 character long ";
  }

  if (!values.confirmpassword) {
    errors.confirmpassword = "Required";
  } else if (values.confirmpassword.length < 8) {
    errors.confirmpassword = "phone number must be 8 character long ";
  } else if (values.password !== values.confirmpassword) {
    errors.confirmpassword = "your passsword doesn't match";
  }
  return errors;
};

function SignUp() {
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
      handleClose()
    }
    if (isSuccess || user) {
      navigate("/");  
      handleClose()
      console.log("success");
    }
  }, [user, isError, isSuccess, message, dispatch, navigate]);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone_number: "",
      password: "",
      confirmpassword: "",
    },
    validate,
    // onSubmit: async(values) => {
    //   if(values){
    //     handleOpen()
    //   }
    //   console.log(JSON.stringify(values, null, 2));

    //   const data = await axios.post('http://localhost:5000/user/signup',values)

    //   if (data.data.created) {
    //     console.log("locallllllllllll");
    //     localStorage.setItem("token", data.data.token);
    //     localStorage.setItem("userInfo", JSON.stringify(data.data));
    //   }
    //   if(data.data){
    //   if(data.data.errors){
    //     console.log("erorrr");
    //     const{email,password}=data.data.errors;
    //     if(email){
    //       console.log("emaillllll");
    //       generateError(email)
    //     }else if(password){
    //       generateError(password)
    //     }

    //   }
    // }
    // },

    // onSubmit: async (values) => {
    //   await axios
    //     .post("http://localhost:5000/user/ ", values)
    //     .then((response) => {
    //       console.log(values);
    //       const data = values;

    //       if (response.data) {
    //         console.log("lllllllllllll");
    //         if (response.data.otpSent) {
    //           handleOpen();
    //         } else if (response.data.emailDuplicate) {
    //           generateError("Email already registered");
    //         } else if (response.data.phone_numberDuplicate) {
    //           generateError("Phone number already registered");
    //         }
    //       }
    //     });
    // },

    //   onSubmit: (values) => {
    //     if (values) {
    //       handleOpen();
    //     }
    //     dispatch(register(values));
    //   },
    // });

    onSubmit:async (values) => {
      console.log("valuessss:", values);
      setData(values);
      // <Otp pass={data} />;
      console.log("data",data);
      // if (values) {
      //   console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
       
        await axios.post('http://localhost:5000/user/sentotp',values).then((response)=>{
          console.log(response.data);
          if(response.data.emailDuplicate){
            generateError(response.data.message)
          }else if(response.data.phone_numberDuplicate){
            generateError(response.data.message)
          }else{
            console.log("dfsfsdfsdfsdfsdf");
 handleOpen();
          }
        })
      // }
    },
  });


 

  const generateError = (error) => {
    console.log("jvvh");
    console.log(error);
    toast.error(error, {
      position: "bottom-right",
    });
  };

  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={400}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={8}
            marginBottom={8}
            padding={3}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #051b34",
              },
            }}
          >
            <ThemeProvider theme={theme}>
              <Typography
                sx={{ fontSize: { xs: 20, md: 30 } }}
                variant="h4"
                padding={3}
                textAlign="center"
              >
                Create an account
              </Typography>
              <TextField
                fullWidth
                type={"text"}
                margin="normal"
                variant="outlined"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                name="firstname"
                placeholder="First name"
              />
              {formik.errors.firstname ? (
                <Typography variant="body1">
                  {formik.errors.firstname}
                </Typography>
              ) : null}
              <TextField
                fullWidth
                type={"text"}
                margin="normal"
                variant="outlined"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                name="lastname"
                placeholder="Last name"
              />
              {formik.errors.lastname ? (
                <Typography variant="body1">
                  {formik.errors.lastname}
                </Typography>
              ) : null}
              <TextField
                fullWidth
                type={"email"}
                margin="normal"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                placeholder="email"
              />
              {formik.errors.email ? (
                <Typography variant="body1">{formik.errors.email}</Typography>
              ) : null}
              <TextField
                fullWidth
                type={"text"}
                margin="normal"
                variant="outlined"
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                name="phone_number"
                placeholder="mobile number"
              />
              {formik.errors.phone_number ? (
                <Typography variant="body1">
                  {formik.errors.phone_number}
                </Typography>
              ) : null}
              <TextField
                fullWidth
                type={"password"}
                margin="normal"
                variant="outlined"
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                placeholder="password"
              />
              {formik.errors.password ? (
                <Typography variant="body1">
                  {formik.errors.password}
                </Typography>
              ) : null}
              <TextField
                fullWidth
                type={"password"}
                margin="normal"
                variant="outlined"
                value={formik.values.confirmpassword}
                onChange={formik.handleChange}
                name="confirmpassword"
                placeholder="confirm password"
              />
              {formik.errors.confirmpassword ? (
                <Typography variant="body1">
                  {formik.errors.confirmpassword}
                </Typography>
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
                Sign Up
              </Button>
              {/* <Button onClick={handleOpen}>Open modal</Button> */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 565,
                    // bgcolor: 'background.paper',
                    // border: '2px solid #000',
                    // boxShadow: 24,
                    p: 4,
                  }}
                >
                  <Otp datas={data} />
                </Box>
              </Modal>
            </ThemeProvider>
          </Box>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default SignUp;
