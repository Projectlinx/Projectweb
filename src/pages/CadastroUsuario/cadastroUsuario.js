import axios from 'axios';
import React, { useState } from 'react';

import './cadastroUsuario.css';

//import InputMask from 'react-input-mask';

export const Cadastro = (props) => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [telefone, setTelefone] = useState('')
  const [celular, setCelular] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [razaoSocial, setRazaoSocial] = useState('')
  const [tipoUsuario, setTipoUsuario] = useState()

  const cadastrarUsuario = (event) => {
    event.preventDefault();

    axios.post('https://localhost:5001/api/Usuario', {
      nome: nome,
      email: email,
      senha: senha,
      telefone: telefone,
      celular: celular,
      cnpj: cnpj,
      razaoSocial: razaoSocial,
      tipoUsuario: tipoUsuario
    })

      .then(resposta => {
        console.log(resposta)

        if (resposta.data != null) {
          props.history.push('/login');
        }

      })

      .catch(erro => console.log(erro))

  }


  return (
    <main>
      <section className="cadastroo">
        <form className="cadastro-content">
          <div className="titulo">
            <h1>Cadastro</h1>
          </div>
          <div className="form-content">
            <div className="inputs">
              <input
                type="text"
                value={nome}
                placeholder="Nome"
                onChange={(event) => setNome(event.target.value)}
              />
            </div>
            <div className="inputs">
              <input
                type="text"
                value={email}
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="inputs">
              <input
                type="password"
                value={senha}
                placeholder="Senha"
                onChange={(event) => setSenha(event.target.value)}
              />
            </div>
            <div className="inputs">
              <input
                //mask= "+99 (99) 9999-9999"
                type="text"
                value={telefone}
                placeholder="Telefone"
                onChange={(event) => setTelefone(event.target.value)}
              />
            </div>
            <div className="inputs">
              <input
                //mask= "+99 (99)99999-9999"
                type="text"
                value={celular}
                placeholder="Celular"
                onChange={(event) => setCelular(event.target.value)}
              />
            </div>
            <div className="inputs">
              <input
                //mask= "99.999.999/9999-99"
                type="text"
                value={cnpj}
                placeholder="CNPJ"
                onChange={(event) => setCnpj(event.target.value)}
              />
            </div>
            <div className="inputs">
              <input
                type="text"
                value={razaoSocial}
                placeholder="Razão Social"
                onChange={(event) => setRazaoSocial(event.target.value)}
              />
            </div>
            <div className="inputs">
              <select

                value={tipoUsuario}
                onChange={(event) => setTipoUsuario(event.target.value)}>
                <option>Tipo de Usuario</option>
                <option value="0">Lojista</option>
                <option value="1">Fornecedor</option>
              </select>
            </div>
          </div>
          <div className="box-botao">
            <button onClick={cadastrarUsuario} type="submit" className="btn-cadastro">Cadastrar</button>
          </div>
        </form>
      </section>

    </main>
  )
}


export default Cadastro;