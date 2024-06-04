import { Grid, Select, TableRow } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

export const StyledSelectReport = styled(Select)({
    borderRadius: "20px",
    background: "white",
    height: "36px",
    width: "126px",
    boxShadow: "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
    "& .MuiSelect-select": {
        transition: "0s !important",
    },

});

export const StyledSelect = styled(Select)({
    background: "white",
    borderRadius: "0px",
    height: "36px",
    width: "80px",
    margin: "3px",
    boxShadow: "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
});

export const StyledGrid = styled(Grid)({
    display: "flex",
    margin: "10px",
});

export const StyledTableCell = styled(TableCell)(() => ({
    padding: "0px 10px 0px",
    lineHeight: "0px",
    [`&.${tableCellClasses.head}`]: {
        borderBottom: "2px solid white",
        borderLeft: "2px solid white",
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
        background: "#e6eaed",
        padding: "10px",
        margin:"20px",
        height: "50px"
    },

    [`&.${tableCellClasses.body}`]: {
        fontSize: "14px",
        border: "2px solid white",
        whiteSpace: "nowrap",
        textAlign: "center",
        padding: "5px",
        lineHeight: "20px",
    },
}));


export const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(even)": {
        background: "rgba(22, 31, 41, 0.07)",
    },
    "&:nth-of-type(odd)": {
        background: "rgba(22, 31, 41, 0.03)",
    },
}));
