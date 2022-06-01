import { Route, Routes } from "react-router-dom";

import Countries from "../pages/Countries/Countries";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/country" element={<Countries />} />
    </Routes>
  );
};
export default Router;
