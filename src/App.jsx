import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Index";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
