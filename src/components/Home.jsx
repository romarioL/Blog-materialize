import React, {Component} from 'react'
import './Home.css'
import {Row, Col, Button} from 'react-materialize'
import {Link} from 'react-router-dom'


class Home extends Component {
	render() {
		return(
			<div>
			<Row>
			 <Col s={12} m={12} l={12} className="text-banner blue lighten-5">
			 	<h1>Seu cientista maluco favorito</h1>
			 	<Link to='/contato'>
			 	<Button waves='light' className="deep-purple darken-4"> me chame</Button>
			 	</Link>
			 </Col>
			</Row>
			<Row>
			 <Col s={12} m={12} l={12} className="banner">	
			 </Col>
			</Row>
			<Row>
			 <Col s={12} m={12} l={12} className="text-banner blue lighten-5">
			 	<h1>O mundo é cheio de coisas maravilhosas para se ver</h1>
			 	<Link to='/experimentos'>
			 	<Button waves='light' className="deep-purple darken-4"> veja</Button>
			 	</Link>
			 </Col>
			</Row>
			<Row>
			 <Col s={12} m={12} l={12} className="banner">	
			 </Col>
			</Row>
			<Row>
			 <Col s={12} m={12} l={12} className="text-banner blue lighten-5">
			 	<h1>As melhores  viagens literárias</h1>
			 	<Link to='/textos'>
			 	<Button waves='light' className="deep-purple darken-4"> deleite-se</Button>
			 	</Link>
			 </Col>
			</Row>
			<Row>
			 <Col s={12} m={12} l={12} className="banner3">	
			 </Col>
			</Row>
			<Row>
			 <Col s={12} m={12} l={12} className="text-banner blue lighten-5">
			 	<h1> A solução ideal para o seu projeto</h1>
			 	<Link to='/projetos'>
			 	<Button waves='light' className="deep-purple darken-4"> se inspire</Button>
			 	</Link>
			 </Col>
			</Row>
			</div>
			)
	}
}

export default Home