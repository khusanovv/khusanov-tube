import React from "react";
import "./SearchBar.css";
import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";

const SearchBar = () => {
  return (
    <Paper
      className="search-bar"
      component={"form"}
      sx={{ border: "1px solid", pl: 2, boxShadow: "none" }}
    >
      <input placeholder="Search..." type="text" className="search-btn" />
      <IconButton>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
