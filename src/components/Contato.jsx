import React, {Component} from 'react'
import './Contato.css'
import {Row, Col, Button, Input } from'react-materialize'
import {Link} from'react-router-dom'


class Contato extends Component {
	render() {
		return(
			<div>
			  <Row>
			 <Col s={12} m={12} l={12} className="banner3">
			    </Col>
			  </Row>
			  <Row className="form container blue lighten-5">
			      <h2>Contato:</h2>
                  <Input  s={12} label="Nome" />
                  <Input type="email" label="Email" s={12} />
                  <Input type='textarea' placeholder="Digite sua mensagem" />
                  <Link to="/">
			 	    <Button waves='light' className="deep-purple darken-4">enviar</Button>
			     </Link>
             </Row>

			</div>
			)
	}
}

export default Contato