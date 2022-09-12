import React from 'react'
import { DatePicker } from '@mui/x-date-pickers';
import {Stack} from '@mui/material';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

function Date() {
    const [value, setValue] = React.useState(dayjs());
  return (
    <Stack>
<DatePicker
          disableFuture
          label="Responsive"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
    </Stack>
  )
}

export default Date