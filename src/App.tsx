import { useDispatch } from "react-redux";
import "./App.css";
import { AppDispatch } from "./store/store";
import { useEffect } from "react";
import { fetchUsers } from "./utils/apiService.ts";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/index.tsx";
import GlobalErrorHandler from "./utils/wrapperComponents/GlobalErrorHandler.tsx";
import React from "react";
import ErrorBoundary from "./utils/wrapperComponents/ErrorBoundary.tsx";
function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <GlobalErrorHandler />
      <ErrorBoundary>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
