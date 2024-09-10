import React from "react";
import SharedRouter from "./shared/Router";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

const App = () => (
  <AuthProvider>
    <SharedRouter />
  </AuthProvider>
);

export default App;
