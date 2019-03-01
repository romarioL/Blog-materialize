import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import './mainNavbar.css'


class mainNavbar extends Component {
	render() {
		return(
			<Navbar brand='Meu santuário' className="purple darken-4" right>
			<NavItem href="/">Home</NavItem>
			<NavItem href="/experimentos">Experimentos</NavItem>
			<NavItem href="/projetos">Projetos</NavItem>
			<NavItem href="/textos">Textos</NavItem>
			<NavItem href="/contato">Contato</NavItem>
			</Navbar>
			)
	}
}

export default mainNavbar