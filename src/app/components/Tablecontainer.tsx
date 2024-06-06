"use client";
import List from "./List";
import { columns, optionShow } from "../data";

import HeaderTitleComponent from "./HeaderTitleComponent";
import { Box, Card, CardContent } from "@mui/material";

export default function Tablecontainer() {
  return (
    <Box>
      <HeaderTitleComponent title="User Info" />
      <Card sx={{ position: "relative" }}>
        <CardContent
          sx={{
            p: (theme) => `${theme.spacing(2, 4.5)} !important`,
          }}
        >
          <List columns={columns} showOption={optionShow} />
        </CardContent>
      </Card>
    </Box>
  );
}
