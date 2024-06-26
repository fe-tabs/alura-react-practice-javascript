import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import FavoriteProvider from "contexts/FavoriteContext";
import Favorite from "pages/Favorite";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header/>
      
      <Container>
        <FavoriteProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favorite" element={<Favorite/>}/>
            <Route path="/:id" element={<Player/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </FavoriteProvider>
      </Container>

      <Footer/>
    </BrowserRouter>
  );
}
