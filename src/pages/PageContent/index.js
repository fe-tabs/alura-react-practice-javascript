import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import FavoriteProvider from "contexts/FavoriteContext";
import { Outlet } from "react-router-dom";

export default function PageContent() {
  return(
    <main>
      <Header/>
      
      <Container>
        <FavoriteProvider>
          <Outlet/>
        </FavoriteProvider>
      </Container>

      <Footer/>
    </main>
  );
}