import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Form} from 'reactstrap';
import FormLoginStc from './formLogin.stc';
import Titre from '../Titre/Titre';
import InputGroup from '../inputGroup';
import Bouton from '../Bouton/Bouton';

const FormLogin = (props) => {
  const { texte, backgroundColor,color, icon } = props;
  return (
    <FormLoginStc>
        <Form>
            <Titre texte="Se connecter " color="#007bff" />
            <InputGroup textLabel="ADRESSE E-MAIL OU NUMERO DE TELEPHONE" />
            <InputGroup textLabel="MOT DE PASSE" />

            <Row>
                <Col id="left">
                   <a href="#elprofa.com">Mot de passe oublié ?</a>
                </Col>
                <Col id="right">
                    <Bouton texte="SE CONNECTER" backgroundColor="#007bff" />
                </Col>
            </Row>
        </Form>
    </FormLoginStc>
  )
};

export default FormLogin;