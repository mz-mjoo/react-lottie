import type { NextPage } from "next";
import styled from "@emotion/styled";
import lottie from "lottie-web";
import Celebrate from "../public/json/celebrate.json";
import { useEffect, useRef } from "react";

const Container = styled.div`
  width: 500px;
  height: 500px;
`;

const Wrapper = styled.div``;

const Home: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: ref.current as HTMLDivElement,
      autoplay: true,
      animationData: Celebrate,
    });
  }, []);

  return (
    <Container>
      <Wrapper id="container" ref={ref}></Wrapper>
    </Container>
  );
};

export default Home;
