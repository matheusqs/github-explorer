import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/23320229?s=460&v=4"
            alt="Matheus Santiago"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms! rocket
            </p>
          </div>

          <FiChevronRight />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/23320229?s=460&v=4"
            alt="Matheus Santiago"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms! rocket
            </p>
          </div>

          <FiChevronRight />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/23320229?s=460&v=4"
            alt="Matheus Santiago"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms! rocket
            </p>
          </div>

          <FiChevronRight />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
