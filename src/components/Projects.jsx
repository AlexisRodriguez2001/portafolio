import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Projects() {
    useEffect(() => {
    AOS.init({ duration: 2000 });
    }, []);

  return (
    <div className="container mt-5">
        <div className="col-md-12" data-aos="fade-down">
          <div className="card bg-dark text-light shadow mb-4 text-center">
            <div className="card-body">
              <h3 className="card-title">Mis Proyectos</h3>
            </div>
          </div>
        </div>
        <div className="col-md-12" data-aos="fade-left">
          <div className="card bg-dark text-light shadow mb-4 text-center">
            <div className="card-body">
              <h3 className="card-title">R&B</h3>
              <p class="card-text">Landing page realizado con las herrmientas de React, HTML, CSS y librerias.</p>
                <a href="https://rybproyect.netlify.app/" class="btn btn-primary ">Visitar</a>
                <a href="https://github.com/AlexisRodriguez2001/RB" class="btn btn-primary">GitHub</a>
              <br></br>
              <img src="./Screenshot_2.png" class="card-img-top" alt="..."></img>
            </div>
          </div>
        </div>
        <br></br>
        <div className="col-md-12" data-aos="fade-left">
          <div className="card bg-dark text-light shadow mb-4 text-center">
            <div className="card-body">
              <h3 className="card-title">Proximos proyectos</h3>
              <p class="card-text">trabajando para agregar mas proyectos...</p>
              <br></br>
            </div>
            <br></br>
          </div>
        </div>
    </div>
  );
}
