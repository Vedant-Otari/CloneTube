import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setvideos } from "../redux/reducer";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const videos = useSelector(state=>state.videos)
  const dispatch = useDispatch()

  useEffect(() => {
    if (searchTerm) {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        dispatch(setvideos(data.items));
      })
      .catch((e) => {});
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    document.title = (searchTerm==='New'?'':(searchTerm+' | ')) + "CloneTube";
  }, [searchTerm,dispatch]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "white" }}
      >
        {searchTerm==='New'?'':'Search results for: '} <span style={{ color: "red" }}>{searchTerm}</span>{" "}videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
