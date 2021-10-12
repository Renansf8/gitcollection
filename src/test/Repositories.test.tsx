import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Repositories from '../pages/Repositories';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testa a página Repositories', () => {
  it('Testa se Repositories é renderizada em seu estado inicial', () => {
    renderWithRouter(<Repositories />);
    const returbButton = screen.getByRole('link', { name: 'Voltar'})
    expect(returbButton).toBeInTheDocument();
  })
})
