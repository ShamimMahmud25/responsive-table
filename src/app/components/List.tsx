"use client";
import { useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box, Typography, MenuItem, TableRow, TableCell } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import Paginate from "./Paginate";
import { useDraggable } from "react-use-draggable-scroll";
import {
  StyledGrid,
  StyledSelect,
  StyledTableCell,
  StyledTableRow,
} from "../style";
import { data, listItem, listProps } from "../type";

const ItemComponent = ({ item, data }: { item: listItem; data: data }) => {
  if (item && item.field === "id") {
    return <Grid>{data?.id}</Grid>;
  }

  if (item && item.field === "age") {
    return <Grid>{data?.age}</Grid>;
  }
  if (item && item.field === "name") {
    return <Grid>{data?.name}</Grid>;
  }

  if (item && item.field === "gender") {
    return <Grid>{data?.gender}</Grid>;
  }
  if (item && item.field === "company") {
    return <Grid>{data?.company}</Grid>;
  }
  if (item && item.field === "email") {
    return <Grid>{data?.email}</Grid>;
  }
  if (item && item.field === "phone") {
    return <Grid>{data?.phone}</Grid>;
  }
  if (item && item.field === "address") {
    return <Grid>{data?.address}</Grid>;
  }
  if (item && item.field === "friends") {
    return (
      <>
        {data?.friends.map((item: any) => (
          <ul key={item.id} style={{listStyleType:"none"}}>
            <li>{item?.name ? item?.name : ""}</li>
          </ul>
        ))}
      </>
    );
  }
};

export default function List(props: listProps) {
  const data = props.rowsData;
  const [perPage, setPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const totalOrders = 20;
  const [selectel, setSelectEl] = useState<null | HTMLElement>(null);
  const open = Boolean(selectel);
  const handleChange = (event: any) => {
    setPerPage(parseInt(event.target.value));
    setPageNumber(1);
  };
  const [visibleColumns, setVisibleColumns] = useState(props?.columns);
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <Box
      sx={{
        background: "#F3F3F4",
        padding: "0px 10px 10px 10px",
        borderRadius: "10px",
        position: "relatve",
        minHeight: "600px",
        margin: "10px 40px 0px 40px",
      }}
    >
      <Grid container columnSpacing={5}>
        <Grid
          sx={{
            width: "100%",
          }}
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
        >
          <StyledGrid
            style={{
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                padding: "7px 0px 0px 10px",
                fontSize: "14px",
              }}
            >
              Show
            </Typography>
            <StyledSelect
              value={perPage}
              onChange={handleChange}
              id="demo-customized-select"
              labelId="demo-customized-select-label"
            >
              {props?.showOption && props?.showOption.length
                ? props.showOption.map((option, i) => (
                    <MenuItem key={i} value={option?.key || ""}>
                      {option?.value}
                    </MenuItem>
                  ))
                : null}
            </StyledSelect>
          </StyledGrid>
        </Grid>
      </Grid>

      <Grid>
        <TableContainer
          component={Paper}
          sx={{ borderRadius: "0px", maxHeight: 500 }}
          ref={ref}
          {...events}
        >
          <Table
            sx={{ textAlign: "center", minWidth: 400 }}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead
              sx={{
                display: "table-header-group",
                whiteSpace: "nowrap",
              }}
            >
              <StyledTableRow>
                {visibleColumns.map((col: any) => (
                  <StyledTableCell
                    sx={{
                      padding: "10px",
                      position:
                        col === props.columns[props.columns.length - 1]
                          ? "sticky"
                          : "",
                      right:
                        col === props.columns[props.columns.length - 1]
                          ? 0
                          : "auto",
                    }}
                    key={col.field}
                  >
                    {col?.header || ""}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {data?.map((row: any, index) => (
                <StyledTableRow key={index}>
                  {visibleColumns.map((col: any) => (
                    <>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        key={row?.id}
                        align="right"
                        sx={{
                          position:
                            col === props.columns[props.columns.length - 1]
                              ? "sticky"
                              : "static",
                          right:
                            col === props.columns[props.columns.length - 1]
                              ? 0
                              : "auto",
                          zIndex:
                            col === props.columns[props.columns.length - 1]
                              ? 1
                              : "auto",
                          background:
                            col === props.columns[props.columns.length - 1]
                              ? "#e6eaed"
                              : "",
                        }}
                      >
                        <ItemComponent
                          key={col.field}
                          item={col}
                          data={row || ""}
                        />
                      </StyledTableCell>
                    </>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Paginate
          totalEntries={totalOrders}
          perPage={perPage}
          pageNumber={pageNumber}
          paginationHandler={(e: any, value: number) => setPageNumber(value)}
          jumpPageHandler={(val: number) => setPageNumber(val)}
        />
      </Grid>
    </Box>
  );
}
