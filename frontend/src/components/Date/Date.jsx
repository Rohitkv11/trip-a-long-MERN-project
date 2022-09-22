import React from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { Box, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

function Date() {
  const [value, setValue] = React.useState(dayjs());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <DatePicker
            disableFuture
            label="From"
            openTo="year"
            views={["year", "month", "day"]}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
        <Box>
          <DatePicker
            disableFuture
            label="To"
            openTo="year"
            views={["year", "month", "day"]}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
      </Box>
    </LocalizationProvider>
  );
}

export default Date;
