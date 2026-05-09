import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import WelcomeModal from "../pages/WelcomeModal";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <WelcomeModal />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}