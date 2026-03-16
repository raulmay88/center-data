import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Companies } from "../pages/Companies";
import RightLaws from "../pages/RightLaws";
import { Help } from "../pages/Help";
import { Profile } from "../pages/Profile";
import MainLayout from "../layouts/MainLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
         <Route element={<MainLayout />}>         
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Companies />} />
            <Route path="/right-laws" element={<RightLaws />} />
            <Route path="/help" element={<Help />} />
            <Route path="/profile" element={<Profile />} />
         </Route>
      </Routes>
    </BrowserRouter>
  );
}