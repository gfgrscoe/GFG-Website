import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import AdminLogin from "./pages/AdminLogin";
import GreenByteAdmin from "./pages/GreenByteAdmin";
import AdminRoute from "./components/AdminRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />
          <Route path="events" element={<Events />} />
          <Route path="resources" element={<Resources />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/green-byte"
          element={
            <AdminRoute>
              <GreenByteAdmin />
            </AdminRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
