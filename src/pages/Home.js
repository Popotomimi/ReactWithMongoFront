import React from 'react';

// Img
import homeImg from "../img/homeFinanca.jpg";
import homeImgTwo from "../img/homeFinanceTow.jpg";

// Icons
import { BsCheckCircle, BsXCircle  } from "react-icons/bs";

const Home = ({users}) => {

  return (
    <div>
      <div className='home'>
        <h1>Todos os usuários cadastrados: </h1>
        <div className='imgs'>
          <img src={homeImg} className='animate__animated animate__fadeInLeft' alt="Imagem de aprovação ou não" />
          <img src={homeImgTwo} className='animate__animated animate__fadeInRight' alt="Imagem de aprovação ou não" />
        </div>
      </div>
      <div className="homeTable">
        <h2>
          Confira se seu nome esta na lista e se foi aprovado:
        </h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Salario</th>
              <th>Aprovado</th>
            </tr>
          </thead>
          <tbody>
          {users.map((item, i) => (
                  <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.salary}</td>
                      <td>
                        {!item.approved &&  <BsXCircle className='circle' /> }
                        {item.approved && <BsCheckCircle className='check' />}
                      </td>

                  </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home;