import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



export default function Home() {
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  return (
    <div className="container mt-5 justify-content-center text-center text-white">
        <div className="col-md-12" data-aos="fade-down">
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h3 className="card-title">Bienvenido a mi Portafolio</h3>
              <h5 className="card-text">Hola, soy Alexis Rodriguez 👨‍💻</h5>
              <h5 className="card-text">
                Soy  Ingeniero en Informática con sólida formación en desarrollo web y experiencia trabajando en entornos ágiles
                (Scrum/Kanban). Me especializo en el diseño, desarrollo y mantenimiento de interfaces web modernas utilizando
                HTML, CSS, JavaScript y frameworks como Angular y React. Poseo una fuerte orientación a la experiencia de usuario
                (UX/UI), buenas prácticas de desarrollo y trabajo colaborativo con equipos de diseño y backend. Busco
                oportunidades como Front-end Developer Trainee para seguir creciendo profesionalmente y aportar con
                soluciones eficientes y escalables.
                </h5>
            </div>
          </div>
        </div>
      <br></br>
        <div className="col-md-12" data-aos="fade-left">
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h4 className="card-title">Mi experiencia laboral 💼</h4>
              <h5 className="card-text">
                Soy  Ingeniero en Informática con sólida formación en desarrollo web y experiencia trabajando en entornos ágiles
                (Scrum/Kanban). Me especializo en el diseño, desarrollo y mantenimiento de interfaces web modernas utilizando
                HTML, CSS, JavaScript y frameworks como Angular. Poseo una fuerte orientación a la experiencia de usuario
                (UX/UI), buenas prácticas de desarrollo y trabajo colaborativo con equipos de diseño y backend. Busco
                oportunidades como Front-end Developer Trainee para seguir creciendo profesionalmente y aportar con
                soluciones eficientes y escalables.
                </h5>
            </div>
          </div>
        </div>
    <br></br>
        <div className="col-md-12" data-aos="fade-right">
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h2 className="card-title">Educacion 🧑‍🎓</h2>
                <h5>
                  Durante el transcurso de mi carrera profesional, he adquirido conocimientos y habilidades en distintos entornos formativos y plataformas,
                  lo que me ha permitido desarrollar competencias técnicas sólidas y adaptarme eficazmente a los desafíos del sector tecnológico.
              </h5>
              <table className="container mt-5 text-center">
                <thead>
                  <tr>
                    <th>Intitucion</th>
                    <th>Duracion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> 
                    Duoc UC, Maipú
                    Ingeniería en Informática
                    </td>
                    <td>Mar 2020 a Dic 2024 (Titulado)</td>
                  </tr>
                  <tr>
                    <td> 
                    SCRUMstudy,
                    Certificación SCRUM
                    </td>
                    <td>Mar 2022 a Jun 2022</td>
                  </tr>
                  <tr>
                    <td> 
                    Udemy,
                    Curso Desarrollo Web Front-end
                    </td>
                    <td>2024 - 2025</td>
                  </tr>
                  <tr>
                    <td> 
                    Udemy,
                    Curso QA Engineer
                    </td>
                    <td>2024 - 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    <br></br>
    <div className="col-md-12" data-aos="fade-left">
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h2 className="card-title">Herramientas 🛠️</h2>
                <h5>
                  A lo largo de mi carrera he trabajado con diversas herramientas y tecnologías que me han permitido desarrollar
                  mis habilidades como Desarrollador Junior. A continuación, se presentan algunas de las principales herramientas.
              </h5>
              <table className="container mt-5 text-center">
                <thead>
                  <tr>
                    <th>Herramienta</th>
                    <th>Descripción</th>
                    <th>Logo</th>
                    <th>Nivel de uso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lenguajes y Web</td>
                    <td>HTML5, CSS3, JavaScript, PHP, Java, Python, C#.</td>
                    <td>
                      <img src="/CSS3_logo_and_wordmark.svg.png" alt="Logo" width="37" />
                      <img src="/HTML5_logo_and_wordmark.svg.png" alt="Logo" width="50" />
                      <img src="/js-icon-transparent-background-free-png.png" alt="Logo" width="50" />
                      <img src="/PHP-logo.svg.png" alt="Logo" width="50" />
                      <img src="/Python-logo-notext.svg.png" alt="Logo" width="50" />
                      <img src="/Logo_C_sharp.svg.png" alt="Logo" width="50" />
                    </td>
                    <td><button type="button" class="btn btn-info">Intermedio</button></td>
                  </tr>
                  <tr>
                    <td>Frameworks y Librerías</td>
                    <td>Angular, React, Bootstrap, .NET, ASP.NET.</td>
                    <td>
                      <img src="/Angular_full_color_logo.svg.png" alt="Logo" width="50" />
                      <img src="/Bootstrap_logo.svg.png" alt="Logo" width="50" />
                      <img src="/React-icon.svg.png" alt="Logo" width="50" />
                      <img src="/Microsoft_.NET_logo.png" alt="Logo" width="50" />
                      <img src="/14621971553750220-512.png" alt="Logo" width="50" />
                    </td>
                    <td><button type="button" class="btn btn-info">Intermedio</button></td>
                  </tr>
                  <tr>
                    <td>Versionamiento e Integración</td>
                    <td>Git, GitHub.</td>
                    <td>
                      <img src="/25231.png" alt="Logo" width="50" />
                      <img src="/Git_icon.svg.png" alt="Logo" width="50" />
                    </td>
                    <td><button type="button" class="btn btn-info">Intermedio</button></td>
                  </tr>
                  <tr>
                    <td>Metodologías y Gestores</td>
                    <td>Scrum, Kanban, JIRA.</td>
                    <td>
                      <img src="/jira-logo-png_seeklogo-468163.png" alt="Logo" width="50" />
                    </td>
                    <td><button type="button" class="btn btn-info">Intermedio</button></td>
                  </tr>
                  <tr>
                    <td>Otros</td>
                    <td>APIs REST, consumo con Fetch/Axios.</td>
                    <td>
                      <img src="/rest-api-icon.webp" alt="Logo" width="50" />
                    </td>
                    <td><button type="button" class="btn btn-info">Basico</button></td>
                  </tr>
                  <tr>
                    <td>Base de Datos</td>
                    <td>ORACLE, mySql, creacion y su desarrollo.</td>
                    <td>
                      <img src="/Oracle-Symbol.png" alt="Logo" width="60" />
                      <img src="/mysql-5-logo-png-transparent.png" alt="Logo" width="60" />
                    </td>
                    <td><button type="button" class="btn btn-info">Intermedio</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    <br></br>
        <div className="col-md-12" data-aos="fade-right">
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h2 className="card-title">Habilidades Blandas 🫂</h2>
                <h5>
                  Además de mis habilidades técnicas, poseo una serie de habilidades blandas que considero fundamentales para
                  el desarrollo profesional y el trabajo en equipo. Estas habilidades me permiten adaptarme a diferentes entornos
                  laborales y colaborar de manera efectiva.
              </h5>
              <table className="container mt-5 text-center">
                <thead>
                  <tr>
                    <th>Habilidades Blandas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Creatividad y pensamiento visual</td>
                  </tr>
                  <tr>
                    <td>Capacidad de aprendizaje rápido</td>
                  </tr>
                  <tr>
                    <td>Trabajo en equipo multidisciplinario</td>
                  </tr>
                  <tr>
                    <td>Adaptabilidad al cambio</td>
                  </tr>
                  <tr>
                    <td>Atención al detalle y compromiso</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    <br></br>
<div className="col-md-12" data-aos="fade-left">
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h2 className="card-title">Idiomas 📖</h2>
                <h5>
                  Durante mi trayectoria profesional he fortalecido mis competencias en el idioma inglés, alcanzando un nivel intermedio contando con certificdo TOEIC.
              </h5>
              <table className="container mt-5 text-center">
              <thead>
                <tr>
                  <th>Idioma</th>
                  <th>Nivel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Español</td>
                  <td>Nativo</td>
                </tr>
                <tr>
                  <td>Inglés</td>
                  <td>Intermedio</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      <br></br>
    </div>
  );
}
