"use client";
import React, { useState } from "react";
import {
  ContainerLogin,
  LoginBox,
  BoxTitle,
  BoxText,
  LogoArea,
  Logo,
} from "../../styles/globalStyles";
import { InputGroup, ForgotPassword, TitleArea } from "./styles";
import { Input } from "../../components/CustomInput";
import { Button } from "../../components/CustomButton";
import { GoPerson } from "react-icons/go";
import { GoLock } from "react-icons/go";
import Link from "next/link";
import { handleLogin } from "../../services/API/protocol/employee";
import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    try {
      handleLogin(username, password).then((response) => {
        localStorage.setItem("token", response.access_token);
        if (response) {
          router.push("/home");
        }
      });
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <ContainerLogin>
      <LoginBox>
        <LogoArea>
          <Logo src={"unicap-logo.png"} />
        </LogoArea>

        <TitleArea>
          <BoxTitle /* size={"26px"} */>Bem vindo(a)!</BoxTitle>
          <BoxText>Realize login na sua conta</BoxText>
        </TitleArea>

        <InputGroup>
          <Input
            placeholder="N de matrícula"
            icon={<GoPerson color="#000000" size={25} />}
            type="text"
            onChange={setUsername}
          />
          <Input
            placeholder="****************"
            icon={<GoLock color="#000000" size={25} />}
            type="password"
            onChange={setPassword}
          />
        </InputGroup>

        <Button
          title={"Entrar"}
          press={() => {
            login();
          }}
        />

        <Link href={"/recoverPassword"}>
          <ForgotPassword>Esqueceu a senha?</ForgotPassword>
        </Link>
      </LoginBox>
    </ContainerLogin>
  );
};
