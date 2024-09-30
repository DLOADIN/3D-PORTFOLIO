import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Links } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
        </div>
          <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <Links />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;