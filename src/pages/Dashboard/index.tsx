import React, { useState, useEffect, useRef } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

import { Title, Form, Repos, Error } from './styles';

interface GithubRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<GithubRepository[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@GitCollection:repositories',
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });
  const [newRepositories, setNewRepositories] = useState('');
  const [inputError, setInputError] = useState('');
  const [invalidRepository, setInvalidRepository] = useState('');
  const formEl = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    localStorage.setItem(
      '@GitCollection:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setNewRepositories(event.target.value);
    setInputError('');
    setInvalidRepository('');
  };

  const handleAddRepo = async (): Promise<void> => {
    if (!newRepositories) {
      setInputError('Informe o username/repository');
      return;
    }

    try {
      const response = await api.get<GithubRepository>(
        `repos/${newRepositories}`,
      );

      const repository = response.data;

      setRepositories([...repositories, repository]);

      /** O método 'current' me da acesso de fato ao elemento, e o 'reset()' reseta o elemento */
      formEl.current?.reset();
      setNewRepositories('');
    } catch (err) {
      setInvalidRepository('Informe um repositório válido');
    }
  };

  return (
    <>
      <Title>Catálogo de repositórios do github</Title>
      <Form ref={formEl} hasError={!!inputError}>
        <input
          placeholder="username/repository_name"
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAddRepo}>
          Buscar
        </button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      {invalidRepository && <Error>{invalidRepository}</Error>}

      <Repos>
        {repositories.map(repository => (
          <Link
            to={`/repositories/${repository.full_name}`}
            key={repository.full_name}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repos>
    </>
  );
};

export default Dashboard;
