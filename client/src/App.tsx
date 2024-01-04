import RequireAuth from "./components/RequireAuth";
import { ThemeProvider } from "./components/theme-provider";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {
  // TODO - add home page, login and register page, and dashboard.
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
