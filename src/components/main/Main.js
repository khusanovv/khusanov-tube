import { useState, useEffect } from "react";
import React from "react";
import { Stack, Button, Box, Container, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import Category from "../category/Category";
import { category } from "../../constants";
import { ApiService } from "../service/api.servise";
const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const selectedCategoryHandler = (category) => setSelectedCategory(category);

  useEffect(() => {
    ApiService.fetching("search").then((data) => console.log(data));
  }, []);

  return (
    <Stack>
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} fontWeight={"bold"}>
            {selectedCategory}{" "}
            <span style={{ color: colors.secondary }}>video</span>
          </Typography>
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
