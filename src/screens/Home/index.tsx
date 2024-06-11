"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Content,
  HeadlineArea,
  Logo,
  LogoArea,
  Title,
  VideoArea,
  ButtonArea,
  Button,
  ButtonTitle,
} from "./styles";
import { GoPencil, GoPerson } from "react-icons/go";
import { AiOutlineFileSearch } from "react-icons/ai";
import { Container } from "@/styles/globalStyles";

export const Home = () => {
  const router = useRouter();
  const [isLoged, setIsLoged] = useState(true);
  const [user, setUser] = useState("user2");

  useEffect(() => {
    if (!isLoged) {
      router.push("/login");
    }
  }, []);

  return (
    <Container>
      <Content img={"background.png"}>
        <LogoArea>
          <Logo src="logo-responsivo.png" />
        </LogoArea>
        <HeadlineArea>
          <Title>
            Seja bem vindo
            <br />
            ao sistema
            <br />
            de protocolos da Unicap!!
          </Title>
          <VideoArea />
        </HeadlineArea>
        <ButtonArea>
          {user === "user1" ? (
            <>
              <Button onClick={() => router.push("/register")}>
                <ButtonTitle>Cadastro</ButtonTitle>
                <GoPencil color="white" size={22} />
              </Button>
              <Button>
                <ButtonTitle>Consulta</ButtonTitle>
                <AiOutlineFileSearch color="white" size={24} />
              </Button>
            </>
          ) : null}
          {user === "user3" ? (
            <>
              <Button onClick={() => router.push("/requirement")}>
                <ButtonTitle>Consulta</ButtonTitle>
                <AiOutlineFileSearch color="white" size={24} />
              </Button>
            </>
          ) : null}
          {user === "user2" ? (
            <>
              <Button>
                <ButtonTitle>Administrador</ButtonTitle>
                <GoPerson color="white" size={22} />
              </Button>
              <Button onClick={() => router.push("/register")}>
                <ButtonTitle>Cadastro</ButtonTitle>
                <GoPencil color="white" size={22} />
              </Button>
              <Button onClick={() => router.push("/requirement")}>
                <ButtonTitle>Consulta</ButtonTitle>
                <AiOutlineFileSearch color="white" size={24} />
              </Button>
            </>
          ) : null}
        </ButtonArea>
      </Content>
    </Container>
  );
};
