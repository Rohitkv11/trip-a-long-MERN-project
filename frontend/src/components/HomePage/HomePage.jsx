import React from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import Image from "../../assets/3339154.jpg";
import Date from '../Date/Date'

function HomePage() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        display: "flex",
        "& > :not(style)": {
          m: 1,
          width: 1520,
          height: 708,
        },
      }}
    >
      <Paper
  
        variant="outlined"

        sx={{
          opacity:0.6,
          flexGrow: 1,
          backgroundSize:"cover",
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
           height:'400vh',
        
        
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* <Paper variant="outlined" square /> */}

<Date />



    </Box>
  );
}

export default HomePage;
