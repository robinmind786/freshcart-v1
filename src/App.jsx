import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Index";
import { Header } from "./components/header/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
