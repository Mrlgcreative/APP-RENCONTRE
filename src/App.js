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
import { useEffect, useState } from 'react';
import EmojiTik from './components/stikersComp/EmojiTik';
import LoadingPage from './views/page/Loading/LoadingPage';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <>

            <ThemeProvider attribute="class">

              <div className="antialiased mt-10 ">
                <main className="p-4  items-center justify-center pt-20">
                  <LoadingPage />
                </main>

              </div>
            </ThemeProvider>

          </>
        ) :
          (
            <ThemeProvider attribute="class">

              <div className="antialiased bg-gray-50 dark:bg-gray-900">
                <Navbar />
                <main className="p-1 h-auto pt-20">
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/login" element={<SignIn />} />
                      <Route path="/register" element={<SignUp />} />
                      <Route path="/test" element={<Test />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </BrowserRouter>
                </main>
                <Footer />
              </div>
            </ThemeProvider>
          )
        }
      </div>

    </>
  );
}

export default App;
