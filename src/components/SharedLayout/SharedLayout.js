import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./SharedLayout.css";

const SharedLayout = () => {
  return (
    <div className="shared-container">
      <Header />
      <main className="main-container">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
export default SharedLayout;
