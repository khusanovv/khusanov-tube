import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import { logo } from "../../constants";
import { colors } from "../../constants/colors";
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: colors.primary,
      }}
    >
      <Link to="/">
        <img width={100} src={logo} alt="" />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
