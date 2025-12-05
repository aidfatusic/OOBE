import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { logo } from "../assets/images";
import "./SmartAlertManagement.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import DataStreamChart from "../components/DataStreamChart";
import PropertyChart from "../components/PropertyChart";
import { NavLink } from "react-router-dom";

const SmartAlertManagement = () => {
  return (
    <Container
      fluid
      className="smart-building-container min-vh-100 d-flex flex-column p-3"
    >
      <Row className="justify-content-center flex-grow-1">
        <Col
          xs={2}
          sm={6}
          md="auto"
          className="d-flex flex-column align-items-center justify-content-center h-100"
        >
          <NavLink to="/smart-building" className="nav-link">
            <Button className="close-icon-button text-white btn-dark">
              <FontAwesomeIcon icon={faX} className="text-white" />
            </Button>
          </NavLink>
        </Col>
        <Col>
          <Image src={logo} alt="SECO Logo" fluid className="logo" />
        </Col>
      </Row>

      <Row className="gx-4 gy-4 flex-grow-1 mb-4">
        <Col xs={12} md={12} lg={6} className="d-flex">
          <DataStreamChart pageType="smart" chartType="area" />
        </Col>
        <Col xs={12} md={12} lg={6} className="d-flex">
          <DataStreamChart pageType="smart" chartType="line" />
        </Col>
      </Row>

      <Row className="gx-4 gy-4 flex-grow-1 mb-4">
        <Col xs={12} md={6} lg={4} className="d-flex">
          <PropertyChart
            chartName="GANTRY TEMPERATURE"
            chartColor="blue"
            data="20.3°C"
          />
        </Col>
        <Col xs={12} md={6} lg={4} className="d-flex">
          <PropertyChart
            chartName="COOLING SYSTEM"
            chartColor="orange"
            data="Normal"
          />
        </Col>
        <Col xs={12} md={6} lg={4} className="d-flex">
          <PropertyChart
            chartName="SYSTEM STATUS"
            chartColor="green"
            data="Ready"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SmartAlertManagement;
