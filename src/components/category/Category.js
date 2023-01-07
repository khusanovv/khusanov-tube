import { Stack } from "@mui/material";
import React from "react";
import { category } from "../../constants";
import { colors } from "../../constants/colors";
import "./Category.css";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack className=" category" direction={"row"}>
      {category.map((item) => (
        <button
          onClick={() => selectedCategoryHandler(item.name)}
          className="category-btn"
          key={item.name}
          style={{
            background: item.name === selectedCategory && colors.secondary,
            color: item.name === selectedCategory && "fff",
          }}
        >
          <span
            style={{
              opacity: "1",
              color: item.name === selectedCategory ? "#fff" : colors.secondary,
              marginRight: "15px",
            }}
          >
            {item.icon}
          </span>
          <span
            style={{
              opacity: "1",
              color: item.name === selectedCategory ? "#fff" : colors.secondary,
            }}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
