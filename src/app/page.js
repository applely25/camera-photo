"use client";
import { useRouter } from "next/navigation";
import * as S from "./style";

const StartPage = () => {
  const router = useRouter();

  return (
    <S.Container>
      <S.StartButton onClick={() => router.push("/photo")}>
        시작히기
      </S.StartButton>
    </S.Container>
  );
};

export default StartPage;
