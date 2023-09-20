import React from "react";
import { About } from "./About";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";



  export const Main = ()=>{
        return(
            <div>   
                <Header></Header>
                <Router>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Router>

            </div>
        );
  }

