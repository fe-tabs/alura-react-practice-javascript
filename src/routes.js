import Favorite from "pages/Favorite";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import PageContent from "pages/PageContent";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<PageContent/>}>
          <Route index element={<Home/>}/>
          <Route path="favorite" element={<Favorite/>}/>
          <Route path=":id" element={<Player/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
