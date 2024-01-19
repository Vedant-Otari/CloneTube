import { Box } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import { useSelector,useDispatch } from "react-redux";
import { setChannelDetail,setvideos } from "../redux/reducer";

const ChannelDetail = () => {
  const ChannelDetail = useSelector(state=>state.ChannelDetail)
  const videos = useSelector(state=>state.videos)
  const dispatch = useDispatch()
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) => {
      dispatch(setChannelDetail(data?.items[0]));
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        dispatch(setvideos(data?.items));
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    document.title = (ChannelDetail?.snippet?.title? ChannelDetail?.snippet?.title + " | ":"") + "CloneTube";
 
  }, [id,ChannelDetail,dispatch]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(337deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "200px",
          }}
        />
        <ChannelCard channelDetail={ChannelDetail} marginTop="-130px" />
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
