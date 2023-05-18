import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LandingPage, SearchResultPage } from "./routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/search-results" element={<SearchResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
