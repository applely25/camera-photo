"use client";
import { useEffect, useRef, useState } from "react";
import * as S from "./style";

const Photo = () => {
  const videoRef = useRef(null);
  const [screenImg, setScreenImg] = useState([]);

  useEffect(() => {
    getWebCam((stream) => {
      videoRef.current.srcObject = stream;
    });
  }, []);
  const getWebCam = (callback) => {
    try {
      const constraints = {
        video: true,
        audio: false,
      };
      navigator.mediaDevices.getUserMedia(constraints).then(callback);
    } catch (err) {
      console.log(err);
      return undefined;
    }
  };
  const ScreenShot = (target) => {
    const videoCam = document.getElementById("videoCam");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 1024;
    canvas.height = 786;
    context.scale(-1, 1);
    context.translate(-1024, 0);
    context.drawImage(videoCam, 0, 0, 1024, 786);
    console.log(videoCam.videoWidth, videoCam.videoHeight);
    canvas.toBlob((blob) => {
      const blobUrl = URL.createObjectURL(blob);

      setScreenImg((prevImages) => [...prevImages, blobUrl]);
    }, "image/jpeg");
  };

  useEffect(() => {
    console.log(screenImg);
  }, [screenImg]);

  return (
    <S.Container>
      <S.CameraContainer>
        {/* <S.Video ref={videoRef} autoPlay id="videoCam" /> */}
        <S.ScreenShotButton onClick={ScreenShot}>촬영하기</S.ScreenShotButton>
      </S.CameraContainer>
      <S.ImgContainer>
        {screenImg.map((src, index) => (
          <>
            <S.Img src={src} alt={`Image ${index}`} />
            <p>bjk</p>
          </>
        ))}
      </S.ImgContainer>
    </S.Container>
  );
};

export default Photo;
