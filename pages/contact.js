import Link from 'next/link'
import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import FormContact from '../components/shared/formContact';
import HelmetPage from "../components/HelmetComponent";

const Wrapper = styled.div`

  background: #fbfbfb;
  margin:0px;

  .container{
    margin:40px auto;
  }
 
`;

export default function Contact() {
  return (
      <Wrapper>
      <HelmetPage title={"Contact"} description={"Page de contact"}/>
        <Container>
           <Row>
              <Col>
                  <FormContact />
              </Col>
            </Row>
        </Container>
      </Wrapper>
  )
}