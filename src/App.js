import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import {
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Navbar,
  Footer,
} from "./components";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Box
        sx={{ backgroundColor: "#000" }}
        minHeight={"100vh"}
        height={"fitContent"}
      >
        <Navbar/>
        <Box minHeight={"95vh"}>
          <Stack
            sx={{
              flexDirection: {
                sx: "column",
                md: "row",
              },
              height: "95vh",
            }}
          >
            <Sidebar/>
            <Routes>
              <Route
                path="/"
                exact
                element={<Feed/>}
              />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="/channel/:id" element={<ChannelDetail />} />
              <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
          </Stack>
        </Box>
      </Box>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
