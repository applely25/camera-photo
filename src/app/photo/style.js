import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const CameraContainer = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
`;

export const Video = styled.video`
  transform: rotateY(180deg);
  width: 50vw;
  height: 400px;
  background-color: white;
`;

export const ScreenShotButton = styled.button`
  font-size: 30px;
  padding: 15px;
  font-weight: bold;
  color: #f6869c;
  background-color: transparent;
  border: 1px solid #f6869c;
  border-radius: 50px;
  cursor: pointer;
`;

export const Canvas = styled.canvas`
  display: none;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
`;
