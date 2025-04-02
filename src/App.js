import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router";
import Home from './views/page/Home';
import NotFound from './views/page/pageNotFound/NotFound';
import { ThemeProvider } from "next-themes";
import SignIn from './views/page/auth/SignIn';
import SignUp from './views/page/auth/SignUp';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import Test from './components/test/Test';

function App() {
  return (
    <>
      <ThemeProvider attribute="class">
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main className="p-4 h-auto pt-20">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </BrowserRouter>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
