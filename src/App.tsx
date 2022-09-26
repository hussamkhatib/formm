import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
//
import { Provider } from "react-redux";
import Dashboard from "./views/Dashboard";
import { store } from "./app/store";
import MyFormsPage from "./views/MyForms";
import Form from "./views/Form";
import NewForm from "./views/NewForm";

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
          </Routes>
        </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
