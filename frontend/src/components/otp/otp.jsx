import * as React from "react";
import axios from "axios";
import ForwardToInboxTwoToneIcon from "@mui/icons-material/ForwardToInboxTwoTone";
import { Typography } from "@mui/material";
import { Button, Box } from "@mui/material";
import OtpInput from "react-otp-input";
// import Timer from "otp-timer";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, register, reset } from "../../features/auth/authSlice";

// import {useSelector, useDispatch} from 'react-redux'
// import SignUp from "../SignUp/SignUp";

export default function Otp(props) {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("fghjkl");
  console.log("propsdataaa", props.datas);
  const handleSubmit = async (otp) => {
    // <SignUp data={state} />
    console.log("otp", state);
    const userdetails = {
      otp: state,
      firstname: props.datas.firstname,
      lastname: props.datas.lastname,
      email: props.datas.email,
      password: props.datas.password,
      isAdmin: props.datas.isAdmin,
      phone_number: props.datas.phone_number,
    };
    // await axios.post('http://localhost:5000/user/otpverification',userdetails)
    dispatch(register(userdetails));
  };
  const [state, setState] = useState("");
  const handleChange = (otp) => {
    setState(otp);
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          // margin: "auto",
          // marginTop: 20,
          width: 500,
          height: 400,
          border: 0.5,
          borderRadius: 2,
          ":hover": {
            boxShadow: "10px 10px 20px #051b34",
          },
        }}
      >
        <ForwardToInboxTwoToneIcon
          sx={{
            width: 50,
            height: 50,
            marginTop: 5,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <Typography sx={{ marginLeft: 21 }} variant="h6" component="h2">
          OTP Verification
        </Typography>
        <Typography
          sx={{ marginLeft: 9, fontSize: 14, marginTop: 1.5 }}
          component="h2"
        >
          An Otp has been sent to your number +91 XXXXXXXXXX
        </Typography>
        <Box sx={{ marginLeft: 14, marginTop: 1.25 }}>
          <OtpInput
            inputStyle={{
              width: "2rem",
              height: "2rem",
              margin: "20px 0.25rem",
              fontSize: "2rem",
              borderRadius: 4,
              border: "1px solid #051b34",
            }}
            value={state}
            onChange={handleChange}
            numInputs={6}
            separator={<span>-</span>}
          />
        </Box>
        {/* <Timer seconds= {30} minutes={0}  /> */}
        {/* <Button
          sx={{
            marginLeft: 18.5,
            marginTop: 1.75,
            backgroundColor: "#051b34",
            ":hover": { backgroundColor: "#27285C" },
          }}
          variant="contained"
        >
          Resend
        </Button> */}
        <Button
          // type="submit"
          onClick={(state) => handleSubmit(state)}
          sx={{
            marginLeft: 25,
            marginTop: 1.75,
            backgroundColor: "#051b34",
            ":hover": { backgroundColor: "#27285C" },
          }}
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </>
  );
}
