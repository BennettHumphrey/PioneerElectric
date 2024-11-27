import React, { useLayoutEffect } from 'react'
import Projects from './Projects/Projects';
import Home from './Home';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import SubPage from './SubPage';
import { subPages } from '../resources/data';
import Contact from './Contact';

const App = () => {

const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return children
    } 

    

  return (
    <BrowserRouter>
      <Wrapper>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/residential" element={<SubPage data={subPages.residential} />} />
          <Route path="/commercial" element={<SubPage data={subPages.commercial} />} />
          <Route path="/industrial" element={<SubPage data={subPages.industrial} />} />
          <Route path="/government" element={<SubPage data={subPages.government} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

      </Wrapper>
    </BrowserRouter>
  )
}

export default App