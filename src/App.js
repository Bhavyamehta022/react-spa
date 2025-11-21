import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body } from "./components/Body";
import { About } from "./components/About";
import { Login } from "./components/Login";
import { ProtectedRoutes } from "./components/ProtectedRoute";
import { Header } from "./components/Header";
import { useState } from "react";
import { Accordian } from "./components/Accordian";
import { Comments } from "./components/Comments";
import { Slider } from "./components/ImageSlider";
import { Pagination } from "./components/Pagination";
import { LiveStream } from "./components/LiveStream";
import { Search } from "./components/Search";
const App = () => {
  const [lang, setLang] = useState("en");
  return (
    <div>
      <BrowserRouter>
        <Header lang={lang} setLang={setLang} />
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/about" element={<About lang={lang} />} />
          </Route>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/acc" element={<Accordian />} />
          <Route path="/comment" element={<Comments />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/livestream" element={<LiveStream />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
