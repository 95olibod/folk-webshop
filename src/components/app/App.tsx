import { BrowserRouter } from "react-router-dom";
import MovieProvider from "../../contexts/movieContext";
import Layout from "../layout/layout";

function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <Layout />
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
