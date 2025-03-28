import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router";
import Home from './views/page/Home';
import NotFound from './views/page/pageNotFound/NotFound';
import { ThemeProvider } from "next-themes";

function App() {
  return (
   <>
   <ThemeProvider attribute="class">
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
   </BrowserRouter>
   </ThemeProvider>
   </>
  );
}

export default App;
