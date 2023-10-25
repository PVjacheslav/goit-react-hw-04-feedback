import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 20px;
  padding: 4px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.3);

  &:hover,
  &:focus {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;
