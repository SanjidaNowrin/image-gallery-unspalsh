import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import {
  AiOutlineLike,
  AiFillCloseCircle,
  AiFillEnvironment,
} from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
const ImageModal = ({ handleClose, show, details }) => {
  const { urls, user, updated_at, likes } = details;
  return (
    <Modal show={show} onHide={handleClose} dialogClassName="my-modal ">
      <Modal.Body>
        <Card className="modal-card">
          <Row>
            <Col md={6}>
              <Card.Img src={urls?.regular} />
            </Col>
            <Col md={4}>
              <h2 className="user-name"> {user?.name}</h2>
              <p className="mb-0 userName">@{user?.username}</p>
              <small className="fw-bold">{updated_at}</small>

              <div className="d-flex  flex-row align-items-center">
                <div className="d-flex align-items-center">
                  <a
                    href={user?.portfolio_url}
                    className="text-decoration-none text-black"
                  >
                    <small className="mb-0 me-1">Portfolio Url</small>
                    <AiFillEnvironment />
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineLike />
                <p className="mb-0 likes">{likes}</p>
              </div>
              <small className="text-muted"> {user?.bio}</small>
            </Col>
          </Row>
        </Card>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <AiFillCloseCircle className="close-modal" onClick={handleClose} />
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
