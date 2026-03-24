import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import MovieDetail from "./pages/MovieDetail";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />

        <main className="flex-1 px-20 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="*" element={<NotFound />} />
            
          </Routes>
        </main>

        <Footer />

        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;