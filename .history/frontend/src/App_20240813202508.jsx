import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";

function App() { 

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route
          path="/"
          element={<h1 className="text-red-500 text-5xl">React App</h1>}
        />
        {/* add more routes here */}
      </Route>     

    </Routes>
  );
}

export default App;
