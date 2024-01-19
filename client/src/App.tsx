import RequireAuth from "./components/RequireAuth";
import { ThemeProvider } from "./components/theme-provider";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";
import MessagePage from "./components/MessagePage";

function App() {
  // TODO - add home page, login and register page, and dashboard.
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/messages" element={<MessagePage />} />
          {/* private routes */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
