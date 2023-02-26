import React, { useState, useEffect, useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image, Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { AiOutlineLike } from "react-icons/ai";

import ImageModal from "./ImageModal";
import { THEME_CONTEXT } from "../../App";

const Images = () => {
  const { darkMode, search } = useContext(THEME_CONTEXT);
  const [images, setImages] = useState([]);
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState({});
  // load data from unsplash api
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=odLvNikoAkwV30kJ8ER5F-nYu3pLuEheF7nsMw3LX50"
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  // modal function
  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setDetails(image);
    setShow(true);
  };

  return (
    <Container Container>
      {images.length === 0 ? (
        <div className="text-center">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <Row>
          {/* filtering */}
          {images
            .filter((image) => {
              if (search === "") {
                return image;
              } else if (
                image.alt_description?.toLowerCase().includes(search)
              ) {
                return image;
              }
            })
            .map((image) => {
              const { urls, id, likes, user } = image;
              return (
                <Col sm={12} md={6} lg={4} className="mb-4" key={id}>
                  <Card className=" border-0 shadow ">
                    <Card.Img
                      onClick={() => handleShow(image)}
                      style={{
                        height: "400px",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      variant="top"
                      src={urls?.regular}
                    />
                    {/* card body start */}
                    <Card.Body
                      className={`d-flex justify-content-between align-items-center ${
                        darkMode && "card-dark"
                      }`}
                    >
                      <div className="author">
                        <Image
                          src={user?.profile_image?.medium}
                          roundedCircle
                        />
                        <div>
                          <h6
                            className={`user-name ${darkMode && "user-dark"}`}
                          >
                            {user?.name}
                          </h6>
                          <p
                            className={`mb-0 userName ${
                              darkMode && "username-dark"
                            }`}
                          >
                            @{user?.username}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <AiOutlineLike />
                        <p
                          className={`mb-0 likes ${
                            darkMode && "username-dark"
                          }`}
                        >
                          {likes}
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      )}
      {/* modal start*/}
      <ImageModal details={details} show={show} handleClose={handleClose} />
    </Container>
  );
};

export default Images;
