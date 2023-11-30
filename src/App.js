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
import { useState } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [sidebarchange, setsidebarchange] = useState(true);

  return (
    <BrowserRouter>
      <Box
        sx={{ backgroundColor: "#000" }}
        minHeight={"100vh"}
        height={"fitContent"}
      >
        <Navbar
          sidebarchange={sidebarchange}
          setsidebarchange={setsidebarchange}
        />
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
            <Sidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sidebarchange={sidebarchange}
            />
            <Routes>
              <Route
                path="/"
                exact
                element={<Feed selectedCategory={selectedCategory} />}
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
