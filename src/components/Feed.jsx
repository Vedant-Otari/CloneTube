import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useDispatch, useSelector } from "react-redux";
import { setvideos } from "../redux/reducer";

const Feed = () => {
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const videos = useSelector((state) => state.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        dispatch(setvideos(data.items));
      })
      .catch((e) => {
        console.log(e);
      });
  }, [selectedCategory, dispatch]);

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
      {videos ? <Videos videos={videos} /> : "dadfad"}
    </Box>
  );
};

export default Feed;
