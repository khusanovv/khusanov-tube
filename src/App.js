import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Channel from "./components/channel/Channel";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Search from "./components/search/Search";
import VideoDetals from "./components/video-datals/Video-detals";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/search" element={<Search />} />
        <Route path="/video-detals" element={<VideoDetals />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
