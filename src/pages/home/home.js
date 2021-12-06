import axios from 'axios';
import { Component } from 'react';

export default class Anuncios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listarAnuncios: [],
      anuncioId: 'vazio'
    }
  }

  buscarAnuncios = () => {
    axios('https://localhost:5001/api/Anuncio', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
      }
    })

      .then(resposta => {
        this.setState({ listarAnuncios: resposta.data })
        console.log(this.state.listarAnuncios)
      })

      .catch(erro => console.log(erro))

  }

  redirecionar(event) {

    this.props.history.push({pathname: '/cadastrarAnuncio'})
  }

  buscarId(id) {
    this.props.history.push({
      pathname: `/anuncio/${id}`,
      state: { anuncioId: id }
    })
  }

  componentDidMount() {
    this.buscarAnuncios();
  }

  render() {
    return (
      <div>
        <main>
          <section>
            <h1>Anuncios</h1>
            <table style={{ borderCollapse: "saparate", borderSpacing: 30 }}>
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Descrição</th>
                </tr>
              </thead>

              <tbody>
                {
                  this.state.listarAnuncios.map((anuncios) => {
                    return (
                      <tr key={anuncios.id} onClick={() => this.buscarId(anuncios.id)}>
                        <td>{anuncios.titulo}</td>
                        <td>{anuncios.descricao}</td><button>Negociar Produto</button>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            <button className='cadastrarAnuncio' onClick={() => this.redirecionar()}>Cadastrar Anuncio</button>
          </section>
        </main>
      </div>
    )
  }
}