"use client";
import List from "./List";
import { columns, optionShow, rowData } from "../data";

import HeaderTitleComponent from "./HeaderTitleComponent";
import { Box, Card, CardContent, Grid } from "@mui/material";

export default function Tablecontainer() {
  return (
    <Box>
      <HeaderTitleComponent title="User Info" />
      <Card sx={{ position: "relative" }}>
        <CardContent
          sx={{
            p: (theme) => `${theme.spacing(3.75, 4.5)} !important`,
          }}
        >
          <Grid container spacing={6}>
            <List
              columns={columns}
              rowsData={rowData}
              showOption={optionShow}
            />
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
