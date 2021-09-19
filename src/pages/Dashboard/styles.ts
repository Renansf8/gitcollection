import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 64px;
  margin-top: 40px;
  max-width: 450px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #fff;
    border-radius: 8px 0 0 8px;
    color: #3a3a3a;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    width: 160px;
    background-color: #0000cc;
    border-radius: 0 8px 8px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#0000cc')};
    }
  }
`;

export const Repos = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(6px);
    }

    // coloca esse estilos apenas a partir da segunda tag a
    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #0000cc;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
