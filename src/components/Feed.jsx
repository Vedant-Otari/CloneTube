import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = ({ selectedCategory }) => {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setvideos(data.items);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [selectedCategory]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "white" }}
      >
        {selectedCategory} <span style={{ color: "red" }}>Videos</span>
      </Typography>
      {videos ? <Videos videos={videos} />:'dadfad'}
    </Box>
  );
};

export default Feed;
