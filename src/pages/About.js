import React from 'react';

const About = () => {
  return (
    <div className='aboutStyle'>
      <div className='about'>
      <h1>Sobre esse software</h1>
        <h3>React.js</h3>
        <p>
          O React.js é uma biblioteca JavaScript de código aberto mantida pelo Facebook. Ele é amplamente utilizado para construir interfaces de usuário interativas e reativas. O React permite que você crie componentes reutilizáveis e organize sua aplicação de maneira modular. Ele utiliza uma abordagem baseada em componentes para criar interfaces de usuário dinâmicas e eficientes
        </p>
        <h3>Animate.css</h3>
        <p>
          O Animate.css é uma biblioteca de animações CSS pronta para uso. Ela oferece uma variedade de animações pré-definidas que você pode aplicar facilmente aos elementos HTML em seu projeto React. Com o Animate.css, você pode adicionar transições suaves e efeitos visuais a elementos como botões, imagens e divs.
        </p>
        <h3>React-Toastify</h3>
        <p>
          O React-Toastify é uma biblioteca que permite adicionar notificações (ou “toasts”) à sua aplicação React de forma simples e personalizada. Com o React-Toastify, você pode exibir mensagens de sucesso, erro ou informações para o usuário de maneira elegante. Ele oferece recursos como animações personalizadas, suporte a RTL (right-to-left), fechamento por swipe e muito mais1.
        </p>
        <h3>Hooks</h3>
        <p>
          Os hooks são uma adição poderosa ao React que permitem que você use o estado e outros recursos do React em componentes funcionais. Eles incluem hooks como useState, useEffect, useContext e useReducer. Com os hooks, você pode gerenciar o estado da sua aplicação de forma mais concisa e eficiente.
        </p>
        <h3>Axios</h3>
        <p>
          O Axios é uma biblioteca JavaScript para fazer requisições HTTP. Ele é amplamente utilizado no desenvolvimento de aplicações React para buscar dados de APIs externas, enviar formulários e realizar outras operações relacionadas à comunicação com servidores. O Axios oferece uma API simples e intuitiva para lidar com requisições assíncronas.
        </p>
        <h3>Express</h3>
        <p>
          O Express é um framework para Node.js que simplifica a criação de aplicativos web e APIs. Ele oferece uma camada de abstração sobre o servidor HTTP padrão do Node.js, permitindo que você defina rotas, middleware e manipule solicitações e respostas de forma mais organizada. O Express é amplamente utilizado para criar backends robustos e escaláveis
        </p>
        <h3>MongoDB</h3>
        <p>
          O MongoDB é um banco de dados NoSQL orientado a documentos. Ele é usado para armazenar dados de forma flexível e escalável. No contexto de uma aplicação React, o MongoDB é frequentemente utilizado como banco de dados para armazenar informações como perfis de usuário, posts, comentários e outros dados relevantes.
        </p>
        <h3>Node.js</h3>
        <p>
          O Node.js é um ambiente de tempo de execução JavaScript que permite que você execute código JavaScript no servidor. Ele é amplamente utilizado para criar aplicativos web escaláveis e em tempo real. No desenvolvimento React, o Node.js é usado para executar o servidor backend e gerenciar as dependências do projeto.
        </p>
        <h3>JavaScript</h3>
        <p>
          O JavaScript é a linguagem de programação principal para o desenvolvimento de aplicações web. Ele é a base do React, permitindo que você crie interatividade, manipule o DOM, faça requisições assíncronas e muito mais. O JavaScript é essencial para o desenvolvimento front-end e back-end.
        </p>
        <h3>GitHub</h3>
        <p>
          O GitHub é uma plataforma de hospedagem de código-fonte e colaboração. Ele permite que desenvolvedores compartilhem, colaborem e controlem versões de seus projetos. No contexto do desenvolvimento React, o GitHub é usado para hospedar o código-fonte, gerenciar problemas, revisar pull requests e colaborar com outros desenvolvedores.
        </p>
      </div>
    </div>
  )
}

export default About;