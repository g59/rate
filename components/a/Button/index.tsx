import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 1.25rem;
  padding: 0 3rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  color: #fff;
  font-size: 1rem;
  background: linear-gradient(90deg, #3ebdaa, #3fa2fc);
  background-color: #3ebdaa;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.12),
      0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.24);
  }

  ${props =>
    props.disabled &&
    `
      background: #ccc;

      &:hover {
        box-shadow: none;
        cursor: default;
      }
    `};
`
