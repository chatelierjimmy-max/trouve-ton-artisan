import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
