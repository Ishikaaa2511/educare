import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "We believe in the power of interactive learning. Through immersive simulations, quizzes, and hands-on exercises, our platform fosters active engagement!",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: " Join a vibrant community of like-minded learners and dedicated instructors. Collaborate, discuss, and exchange ideas, creating a supportive environment!",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Our certificates hold high credibility, as they are backed by our team of subject-matter experts and educators who are committed to maintaining the quality!",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;