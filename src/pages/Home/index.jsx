import { Container, Row, Col, Button } from "react-bootstrap";
import Counter from "../../components/common/Counter";
import "./style.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Container fluid className="text-center py-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h2 className="fw-bold mb-4">Bienvenido a Kafëa </h2>
            <p className="text-muted mb-5">
              Proximamente conoceras los mejores cafe de mayores puntajes.
            </p>

            <div className="counter-container">
              {/* <Counter /> */}
              <h2>Coming Soon</h2>
            </div>

            <Button variant="dark" className="mt-4" >
              <a href="./products">Ver catálogo</a>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;