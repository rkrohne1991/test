import styled from 'styled-components';

interface ImageURLprops {
  imageUrl: string;
}

export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 10px;
  display: flex;
`;

export const Items = styled.div`
  flex: 1 auto;
  padding: 10px;
  > * {
    padding: 0 20px 0 0;
  }
`;

export const UserIcon = styled.div<ImageURLprops>`
  margin: 10px;
  width: 48px;
  height: 48px;
  background: #d8d8d8;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-image: ${imageProps => `url(${imageProps.imageUrl})`};
`;
