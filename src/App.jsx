import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";

const Nav = lazy(() => import("./components/Nav"));
const Home = lazy(() => import("./components/Home"));
const Popular = lazy(() => import("./components/Popular"));
const Battle = lazy(() => import("./components/Battle"));
const Search = lazy(() => import("./components/Search"));

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
