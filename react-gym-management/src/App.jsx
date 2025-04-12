import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./pages/AdminDashboard";
import RedirectGoogleAuth from "./components/GoogleRedirectHandler"

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login/callback" element={<RedirectGoogleAuth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={
          <PrivateRoute roleRequired="admin">
            <AdminDashboard />
          </PrivateRoute>
        } />
        <Route path='/' element={<Login />} />

        <Route path="/dashboard" element={<PrivateRoute ><Dashboard /></PrivateRoute>} />

      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
