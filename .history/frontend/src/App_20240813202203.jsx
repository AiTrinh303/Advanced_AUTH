import { Navigate, Route, Routes } from "react-router-dom";

function App() { 

  return (
    <Routes>

element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      <h1 className="text-red-500 text-5xl">React App</h1>

    </Routes>
  );
}

export default App;
