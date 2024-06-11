"use client";
import {
  ContainerLogin,
  LoginBox,
  LogoArea,
  Logo,
  BoxTitle,
  Cancel,
  BoxText,
} from "../../styles/globalStyles";
import { InputGroup, TitleArea } from "./styles";
import React, { useState } from "react";
import { GoKey } from "react-icons/go";
import Link from "next/link";
import Menssager from "../../components/menssager";
import { Input } from "../../components/CustomInput";
import { Button } from "../../components/CustomButton";

export const RedefinePassword = () => {
  const [isSent, setIsSent] = useState(false);

  return isSent ? (
    <ContainerLogin>
      <LoginBox>
        <LogoArea>
          <Logo src={"unicap-logo.png"} />
        </LogoArea>
        <TitleArea gap={"41px"}>
          <BoxTitle size={"20px"}>Recuperação de Senha</BoxTitle>
          <BoxText>Olá, Vanessa Ferreira Vieira!</BoxText>
          <Menssager text={"Senha alterada com sucesso"} />
          <Link href={"/login"}>
            <Cancel>Realizar login novamente</Cancel>
          </Link>
        </TitleArea>
      </LoginBox>
    </ContainerLogin>
  ) : (
    <ContainerLogin>
      <LoginBox>
        <LogoArea>
          <Logo src={"unicap-logo.png"} />
        </LogoArea>
        <TitleArea gap={"41px"}>
          <BoxTitle size={"20px"}>Recuperação de Senha</BoxTitle>
        </TitleArea>

        <InputGroup>
          <Input
          type="text"
            placeholder="Digite sua senha"
            icon={<GoKey size={20} color="#000000" />}
          />
          <Input
          type="text"
            placeholder="Digite sua senha novamente"
            icon={<GoKey size={20} color="#000000" />}
          />
        </InputGroup>

        <Button title={"Redefinir senha"} press={() => setIsSent(!isSent)} />

        <Link href={"/login"}>
          <Cancel>Cancelar</Cancel>
        </Link>
      </LoginBox>
    </ContainerLogin>
  );
};
