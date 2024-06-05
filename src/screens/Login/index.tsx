"use client";
import React, { useEffect, useState } from "react";
import {
  ContainerLogin,
  LoginBox,
  BoxTitle,
  BoxText,
  LogoArea,
  Logo,
} from "../../globalStyles";
import { InputGroup, ForgotPassword, TitleArea } from "./styles";
import { Input } from "../../components/CustomInput";
import { Button } from "../../components/CustomButton";
import { GoPerson } from "react-icons/go";
import { GoLock } from "react-icons/go";
import Link from "next/link";
import {
  getEmployee,
  handleLogin,
} from "../../services/API/protocol/funcionario";
import { useFetch } from "../../hooks/useFetch";
import { protocolApi } from "../../services/API";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [x, setX] = useState(false);

  const condition = username.length && password.length && x;

  const login = () => {
    handleLogin(username, password).then((response) =>
      localStorage.setItem("token", response.access_token)
    );
  };

  const url = "/funcionario";

  const { data } = useFetch(url, {}, condition, protocolApi);

  console.log("data", data);

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
            setX(!x);
          }}
        />

        <Link href={"/recoverPassword"}>
          <ForgotPassword>Esqueceu a senha?</ForgotPassword>
        </Link>
      </LoginBox>
    </ContainerLogin>
  );
};
