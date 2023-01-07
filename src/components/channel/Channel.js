import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";

const Channel = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <Link to={"/"}>
        <Button>Main</Button>
      </Link>
    </div>
  );
};

export default Channel;
