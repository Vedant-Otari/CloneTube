import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
const VideoDetail = () => {
  const [VideoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=id,snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        console.log("ans: ", data);
        setVideos(data.items);
      }
    );
  }, [id]);

  if (!VideoDetail?.snippet) return "Loading dafdf...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = VideoDetail;
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh",width:'100%'}}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "0px",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color={"#fff"} variant="h5" fontWeight={"bold"} p={2}>
              {title}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{
                color: "#fff",
              }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color={"#fff"}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: 12, color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
