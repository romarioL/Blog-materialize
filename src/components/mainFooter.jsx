import React, {Component} from 'react'
import './Projetos.css'
import {Footer} from 'react-materialize'


class mainFooter extends Component {
	render() {
		return(
			<Footer  copyrights="&copy 2015 Copyright Text"
 
  links={
    <ul>
      <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
      <li><a className="grey-text text-lighten-3" href="/experimentos">Experimentos</a></li>
      <li><a className="grey-text text-lighten-3" href="/projetos">Projetos</a></li>
      <li><a className="grey-text text-lighten-3" href="/textos">Textos</a></li>
      <li><a className="grey-text text-lighten-3" href="/contato">Contato</a></li>
    </ul>
  }
  className='example purple darken-4'
>
    <h5 className="white-text">Meu santuário</h5>
    <p className="grey-text text-lighten-4">O lugar mais louco da internet</p>
</Footer>
			)
	}
}

export default mainFooter