"use client";
import { useEffect, useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box, Typography, MenuItem } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import Paginate from "./Paginate";
import { useDraggable } from "react-use-draggable-scroll";
import { StyledSelect, StyledTableCell, StyledTableRow } from "../style";
import { data, listItem, listProps } from "../type";
import { getUserList } from "../actions/getUser";
import { RotatingLines } from "react-loader-spinner";
import SearchComponent from "./SearchComponent";

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
          <ul key={item.id} style={{ listStyleType: "none" }}>
            <li>{item?.name ? item?.name : ""}</li>
          </ul>
        ))}
      </>
    );
  }
};

export default function List(props: listProps) {
  const [perPage, setPerPage] = useState(10);
  const [filterData, setFilterData] = useState<string>("");
  const [pageNumber, setPageNumber] = useState(1);
  const [userList, setUserList] = useState<data[]>([]);
  const [totalUser, setTotalUser] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleChange = (event: any) => {
    setPerPage(parseInt(event.target.value));
    setPageNumber(1);
  };
  const handleFilter = (value: string) => {
    setFilterData(value);
    if (!value) {
      findUser(pageNumber, "");
    }
  };
  const [visibleColumns, setVisibleColumns] = useState(props?.columns);
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const handleSearch = () => {
    setPageNumber(1);
    findUser(1, filterData.trim());
  };
  const findUser = (pageNo: number, searchData: string) => {
    setLoading(true);
    const { userListData, totalUser } = getUserList(
      perPage,
      pageNo,
      searchData
    );
    setLoading(false);
    setUserList(userListData);
    setTotalUser(totalUser);
  };

  useEffect(() => {
    findUser(pageNumber, filterData.trim());
  }, [perPage, pageNumber]);

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
      <Grid container columnSpacing={1}>
        <Grid
          sx={{
            width: "100%",
          }}
          item
          xs={12}
          sm={6}
          md={2}
          lg={2}
          container
        >
          <Grid item xs={4}>
            <Typography
              sx={{
                padding: "7px 0px 0px 10px",
                fontSize: "14px",
              }}
            >
              Show
            </Typography>
          </Grid>
          <Grid item xs={8}>
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
          </Grid>
        </Grid>
        <Grid
          sx={{
            width: "100%",
            gap: "5px",
          }}
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          container
        >
          <Grid item xs={2}>
            <Typography
              sx={{
                padding: "5px 0px 0px 10px",
                fontSize: "14px",
              }}
            >
              Search
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <SearchComponent
              value={filterData}
              onChange={handleFilter}
              handleSearch={handleSearch}
            />
          </Grid>
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
            {loading ? (
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  zIndex: 1,
                }}
              >
                <RotatingLines
                  strokeColor="#009EFA"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="80"
                  visible={true}
                />
              </Box>
            ) : (
              ""
            )}
            <TableBody>
              {userList?.map((row: any, index) => (
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
          totalEntries={totalUser}
          perPage={perPage}
          pageNumber={pageNumber}
          paginationHandler={(e: any, value: number) => setPageNumber(value)}
          jumpPageHandler={(val: number) => setPageNumber(val)}
        />
      </Grid>
    </Box>
  );
}
