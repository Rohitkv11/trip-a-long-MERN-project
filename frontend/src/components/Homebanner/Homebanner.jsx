import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function Homebanner() {
  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: "#051b34",
        height: "267px",
      }}
    >
      <Stack sx={{
        m:8
      }}>
      <Typography sx={{color:'white'}} variant="h4" component="h3">
        Trip Along – Trusted Car Rental Services
      </Typography>
      <Typography sx={{color:'white'}} variant="body1">
        Trip Along is one of the most trusted car rental services as it is promoted
        by Trip Along.co in India. The rent-a-car
        service provider offers an outstanding model and a wide variety of
        vehicle options at the most competitive rates. With Trip Along’s commitment
        to providing a hassle-free service, you will have the best rent-a-car
        experience. This means that you can carry out all your plans without any
        hamper. At Trip Along, we provide cars that can meet your every need. Also,
        we allow you to enjoy flexibility with respect to start and endpoints.
        You can book cars on an hourly, daily, or weekly basis. 
      </Typography>
      </Stack>
    </Stack>
  );
}

export default Homebanner;
