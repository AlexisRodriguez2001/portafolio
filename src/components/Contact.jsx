import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



export default function Contact() {
  useEffect(() => {
  AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container mt-5 text-center">
      <div className="col-md-12" data-aos="fade-down">
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h3 className="card-title">Contacto</h3>
              <h5 className="card-text">📧 alexisrodriguezjim1@gmail.com</h5>
              <h5 className="card-text">📞 +56 9 3495 3243</h5>
              <h5 className="card-text">📍 Maipú, Santiago, Chile</h5>
              <p>🔗 <a href="https://github.com/AlexisRodriguez2001" target="_blank">GitHub</a></p>
              <p>🔗 <a href="https://www.linkedin.com/in/alexis-rodriguez-jimenez/" target="_blank">LinkedIn</a></p>
            </div>
          </div>
        </div>
    </div>
  );
}
