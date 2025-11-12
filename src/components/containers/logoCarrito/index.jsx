import {Button} from "react-bootstrap";
import "./style.css"
function LogoCarrito() {
  return (
    <div className="d-flex align-items-center" style={{ cursor: "pointer" }}>
      <Button className="buttonNav">
        <img 
          src="./src/assets/cart3.svg" 
          alt="carrito" 
          width="28"
          className="me-2"
        />
          <span className="badge bg-dark"> 1</span>
      </Button>
    </div>
  );
};

export default LogoCarrito