import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/18754691?s=460&u=09c04df1369e272974644e2da576101759417f77&v=4"
            alt="Wellington Cid"
          />
          <div>
            <strong>wellingtoncid/foodfy</strong>
            <p>Repository description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1880</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Open Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/dfasdfa">
          <div>
            <strong>fadsfasd</strong>
            <p>fasdfasdasdfas</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
