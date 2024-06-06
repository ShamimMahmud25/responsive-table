import React, { ChangeEvent, useState } from "react";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { searchProps } from "../type";
const SearchContainer = styled.div({});

const SearchComponent = (props: searchProps) => {
  const [value, setValue] = useState<string>(props.value || "");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (props.onChange) props.onChange(event.target.value || "");
  };

  return (
    <SearchContainer>
      <OutlinedInput
        value={value}
        placeholder={props.placeholder}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            ev.preventDefault();
            props.handleSearch();
          }
        }}
        style={{
          color: "black",
          width: "142%",
          fontWeight: 400,
          fontSize: "14px !important",
          padding: "10px 20px",
          outline: "none",
          height: "36px",
          background: "#FFFFFF",
          boxShadow: "inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)",
          borderRadius: "20px",
          ...props.style,
        }}
        onChange={handleChange}
        aria-describedby="icons-search-helper-text"
        endAdornment={
          <InputAdornment style={{ width: "16px" }} position="end">
            <SearchIcon />
          </InputAdornment>
        }
        inputProps={{
          "aria-label": "Search",
        }}
      />
    </SearchContainer>
  );
};

export default SearchComponent;
