import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="row min-vh-100 d-flex align-items-center justify-content-center">
        <div className="col text-center">
          <h1 className="display-1">
            Actividad 8:
            <br />
            <Link to="/" className="text-decoration-none">
              Relaciones
            </Link>{" "}
            Y{" "}
            <Link to="/" className="text-decoration-none">
              Funciones
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
