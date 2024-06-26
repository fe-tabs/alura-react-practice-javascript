import Banner from "components/Banner";
import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import FavoriteProvider from "contexts/FavoriteContext";
import Favorite from "pages/Favorite";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header/>
      <Banner/>
      
      <Container>
        <FavoriteProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favorite" element={<Favorite/>}/>
          </Routes>
        </FavoriteProvider>
      </Container>

      <Footer/>
    </BrowserRouter>
  );
}
