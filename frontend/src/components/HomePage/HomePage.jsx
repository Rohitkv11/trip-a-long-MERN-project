import React from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import Image from "../../assets/3339154.jpg";
import Date from "../Date/Date";
import Homebanner from "../Homebanner/Homebanner";
import Footer from "../Footer/Footer";
import { Stack, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#051b34",
      darker: "#051b34",
    },
  },
  typography: {
    h4: {
      color: "#051b34",
    },
    subtitle1: {
      color: "#051b34",
    },
  },
});

function HomePage() {
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "black",
          display: "flex",
          "& > :not(style)": {
            m: 1,
            // width: 1520,
            height: 708,
          },
        }}
      >
        {/* <Stack
          sx={{
            position: "relative",
          }}
        > */}
        <Paper
          variant="outlined"
          sx={{
            opacity: 4,
            flexGrow: 1,
            backgroundSize: "cover",
            backgroundImage: `url(${Image})`,
            // backgroundRepeat: "no-repeat",
            height: "400vh",
            backgroundPosition: "center center",
            position: "relative",
            // backgroundAttachment: "fixed",
          }}
        />
        <Stack
          direction="column"
          spacing={0.5}
          sx={{
            width: "380px",
            top: "75px",
            right: "250px",
            position: "absolute",
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography variant="h4">Best price Guaranteed!</Typography>
            <Typography variant="subtitle1">
              Our online booking service is easy and fast. Reserve your rental
              car now and get competitive prices compaired to other competitors.
            </Typography>

            <Button color="primary" variant="contained">
              Book Now
            </Button>
          </ThemeProvider>
        </Stack>
        {/* </Stack> */}
        {/* <Paper variant="outlined" square /> */}
      </Box>
      {/* <div>
        <Box sx={{ m: 4 }}>
          <Date />
        </Box>
      </div> */}

      {/* <Stack sx={{ display: "flex",alignItems:"strech" }}> */}
      <Homebanner />
      {/* </Stack> */}
      <Footer />
    </div>
  );
}

export default HomePage;
