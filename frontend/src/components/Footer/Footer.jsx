import React from "react";
import { Stack, Typography } from "@mui/material";

function Footer() {
  return (
    <Stack
      sx={{
        height: "50px",
        mt: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Typography sx={{ fontWeight: 500 }} variant="h6">
        Copyright © 2022 Tripalong.com All rights reserved
      </Typography>
    </Stack>
  );
}

export default Footer;
