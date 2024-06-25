import Banner from "components/Banner";
import Footer from "components/Footer";
import Header from "components/Header";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header/>
      <Banner/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}
