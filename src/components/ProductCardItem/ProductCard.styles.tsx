import styled from 'styled-components';

export const CardItem = styled.div`
  background-color: #fff;
  border-radius: 10px;
  margin: 5px;
  padding: 0 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 242px;

  button {
    font-size: 14px;
    background-color: #00a3e9;
    color: #fff;
    margin-bottom: 20px;
    border: none;
    padding: 16px 22px;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  padding: 44px 12px;
`;

export const Title = styled.div`
  font-size: 18px;
  text-align: center;
  padding-bottom: 14px;
`;

export const Description = styled.div`
  font-size: 14px;
  text-align: center;
`;

export const Price = styled.div`
  font-size: 14px;
  text-align: center;
  padding: 76px 0 20px;
`;
