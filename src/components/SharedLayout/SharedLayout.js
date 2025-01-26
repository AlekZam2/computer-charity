import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
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
    </div>
  );
};
export default SharedLayout;
