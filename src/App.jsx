import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx";
import Stack from "./components/Stack.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <main className="text-neutral-900">
      <Header />
      <Home />
      <About />
      <Stack />
      <Projects />
    </main>
  )
}

export default App
