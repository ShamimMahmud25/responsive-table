"use client";
import {
  Box,
  Typography,
  Pagination,
  PaginationItem,
  TextField,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { PaginateProps } from "../type";

const Paginate = ({
  perPage,
  pageNumber,
  totalEntries,
  paginationHandler,
  jumpPageHandler,
}: PaginateProps) => {
  const [jumpTo, setJumpTo] = useState<number>(1);

  return (
    <Box display="flex" justifyContent="space-between"  py={4}>
      <Typography>
        Showing {perPage * (pageNumber - 1) + 1} to{" "}
        {perPage * pageNumber > totalEntries
          ? perPage * pageNumber - (perPage * pageNumber - totalEntries)
          : perPage * pageNumber}{" "}
        of {totalEntries} entries
      </Typography>
      <Box display="flex">
        <Pagination
          page={pageNumber}
          color="primary"
          variant="outlined"
          shape="rounded"
          count={Math.ceil(totalEntries / perPage)}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: ArrowBackIcon,
                next: ArrowForwardIcon,
              }}
              {...item}
            />
          )}
          onChange={paginationHandler}
        />
        <TextField
          InputProps={{
            style: {
              width: "120px",
              height: "30px",
              borderRadius: 0,
            },
          }}
          type="number"
          value={jumpTo}
          onChange={(e) => {
            const jump = parseInt(e.target.value);
            if (
              e.target.value === "" ||
              (jump >= 0 && jump <= Math.floor(totalEntries / perPage))
            )
              setJumpTo(parseInt(e.target.value));
          }}
        />
        <Button
          variant="contained"
          sx={{
            width: "45px",
            height: "30px",
            borderRadius: 0,
            marginLeft: "10px",
          }}
          onClick={() => jumpPageHandler(jumpTo || 1)}
        >
          Go
        </Button>
      </Box>
    </Box>
  );
};

export default Paginate;
