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
      

    </Routes>
  );
}

export default App;
