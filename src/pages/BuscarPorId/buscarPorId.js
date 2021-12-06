import axios from 'axios';
import { Component } from 'react';
import './buscarPorId.css'

export default class Anuncio extends Component{
  constructor(props){
    super(props);
    this.state = {
      anuncio:{},
      idAnuncio: this.props.location.state.anuncioId
    }
  }

  buscarPorId = () => {
      axios.get(`https://localhost:5001/api/Anuncio/${this.state.idAnuncio}`)

      .then(resposta => {
        this.setState({ anuncio: resposta.data })
        console.log(this.state.anuncio)
      })

      .catch(erro => console.log(erro))
  }

  cadastrarProposta = (event) => {
    event.preventDefault()

    var body = {
      anuncioId: this.state.idAnuncio
    }

    let headers = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
      }  
    }

    axios.post(`https://localhost:5001/api/Proposta`, body, headers)

    .then(resposta => {
      console.log(resposta)
    })

    .catch(erro => console.log(erro))

  }

  componentDidMount() {
    this.buscarPorId();
  }

  render() {
    return (
      <>
        <h3>{this.state.anuncio.titulo}</h3>
        <p>{this.state.anuncio.descricao}</p>
        <p>{this.state.anuncio.nomeAutor}</p>
        <button className="botaoProposta" onClick={this.cadastrarProposta}>Propor Reunião</button>
      </>
    )}
}