import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Companies } from "../pages/Companies";
import { RightLawsPage } from "../pages/RightLaws";
import { Help } from "../pages/Help";
import { Us } from "../pages/Us";
import { NotFound } from "../pages/NotFound";

import MainLayout from "../layouts/MainLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route index element={<Home />} />
          <Route path="/services" element={<Companies />} />
          <Route path="/right-laws" element={<RightLawsPage />} />
          <Route path="/help" element={<Help />} />
          <Route path="/us" element={<Us />} />
          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}