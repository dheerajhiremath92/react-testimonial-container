import React from "react";
import './App.css';
import image from "./siwfxjjmzk.jpg";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function TestamonialsPage() {
  return (
    <div className="App">
      <div class="testimonials-container">
        <h3> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Testimonial</h3>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;<FaLinkedinIn /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FaGithub />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FaFacebookF />
        <div class="progress-bar"></div>
        <p class="testimonial">
          <i>
            Qué piensas de español? Pues...En realidad, no es mucho difícil, no
            es como mis amigos dicen; dicen que español es taaaaaaaan difícil,
            son (o están?) equivocado. Si sigue en las clases (que no ellos
            hacen), la aprendizaje no es un problema. Solamente he estudiado
            español durante casi tres años ahora, y mira! Ya mi español es mas o
            menos! Puedo aprender este idioma. Tal vez/quízas (difference?)
            puedo hablar español con fluidez dentro de/en tres años? No sé
            jajajajaaja.
          </i>
        </p>
        <div class="centered-items">
          <img class="logo" src={image} alt="logo" />
          <div class="user-details">
            <h4 class="username">John Ram</h4>
            <p class="role">Freelancer</p>
            <p class="role">xyz company, Boston </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestamonialsPage;
