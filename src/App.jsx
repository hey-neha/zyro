import "./App.css";
import About from "./Components/RouteHandling/About";
import BookNow from "./Components/RouteHandling/BookNow";
import Contact from "./Components/RouteHandling/Contact";
import Home from "./Components/RouteHandling/Home";
import Service from "./Components/RouteHandling/Service";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booknow" element={<BookNow />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
