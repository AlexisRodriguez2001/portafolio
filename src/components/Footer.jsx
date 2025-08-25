export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} Alexis Rodríguez</p>
        <p className="mb-0">
          <a href="mailto:alexisrodriguezjim1@gmail.com" className="text-light text-decoration-none">
            alexisrodriguezjim1@gmail.com
          </a>
          {" | "}
          <a href="https://github.com/tuusuario" className="text-light text-decoration-none" target="_blank" rel="noreferrer">
            GitHub
          </a>
          {" | "}
          <a href="https://linkedin.com/in/tuusuario" className="text-light text-decoration-none" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
