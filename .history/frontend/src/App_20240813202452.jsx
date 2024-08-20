import { Navigate, Route, Routes } from "react-router-dom";

function App() { 

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route
          path="/"
          element={<h1 className="text-red-500 text-5xl">React App</h1>}
        />
        {/* You can add more routes here */}
      </Route>

      

    </Routes>
  );
}

export default App;
