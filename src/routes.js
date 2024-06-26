import Banner from "components/Banner";
import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header/>
      <Banner/>
      
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Container>

      <Footer/>
    </BrowserRouter>
  );
}
