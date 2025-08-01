import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx";
import Stack from "./components/Stack.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  //Check if theme is in localstorage
  if(!document.cookie){
      console.log("Cookie setted")
      document.cookie = "theme=dark";
  }
  
  //Set data attribute of html based on the theme stored in cookies.
  document.documentElement.setAttribute('data-theme', document.cookie.split('=')[1]);

  return (
    <main className="text-neutral-900">
      <Header />
      <Home />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
