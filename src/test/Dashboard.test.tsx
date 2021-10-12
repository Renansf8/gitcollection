import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dashboard from '../pages/Dashboard';
import renderWithRouter from '../helpers/renderWithRouter';


describe('Testa a página Dashboard', () => {
  it('Testa se Dashboard é renderizada em seu estado inicial', () => {
    renderWithRouter(<Dashboard />);
    const title = screen.getByText(/catálogo de/i);
    expect(title).toBeDefined();

    const searchButton = screen.getByRole('button', { name: 'Buscar'});
    expect(searchButton).toBeInTheDocument();
  });

  it('Testa se ao clicar em buscar, um componente com o nome do repositório é renderizado', async () => {
    renderWithRouter(<Dashboard />);
    const searchButton = screen.getByRole('button', { name: 'Buscar'});
    const inputRepo = screen.getByPlaceholderText('username/repository_name');
    expect(inputRepo).toBeDefined();
    expect(inputRepo).toHaveValue('');

    userEvent.type(inputRepo, 'angular/angular')
    expect(inputRepo).toHaveValue('angular/angular');
    userEvent.click(searchButton);

    const repositorie = await screen.findByText(/angular/i);
    expect(repositorie).toBeInTheDocument();
  });

  it('Testa se a página é redirecionada para a página Repositórios', async () => {
    const { history } = renderWithRouter(<Dashboard />);

    history.push('/repositories')
    const { pathname } = history.location

    expect(pathname).toBe('/repositories');
  });
});
