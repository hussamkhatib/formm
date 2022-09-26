import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
//
import { Provider } from "react-redux";
import Dashboard from "./views/Dashboard";
import { store } from "./app/store";
import MyFormsPage from "./views/MyForms";
import Form from "./views/Form";
import NewForm from "./views/NewForm";
import Login from "./views/Login";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/forms" element={<MyFormsPage />} />
            <Route path="/forms/:formId" element={<Form />} />
            <Route path="/forms/new" element={<NewForm />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </ChakraProvider>
  );
}

export default App;
