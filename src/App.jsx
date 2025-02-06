import { BrowserRouter } from "react-router-dom";
import { About,  Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Links } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <Links />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;