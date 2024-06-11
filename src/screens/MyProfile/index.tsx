"use client";
import {
  Container,
  Content,
  Profile,
  BackButtonArea,
  Info,
  InfoGroup,
  InfoText,
  InfoTitle,
  Infos,
  TitleArea,
  Title,
  Logo,
  Button,
  ButtonText,
  InputTitle,
  Input,
  InputGroup,
  Inputs,
  Splited,
  ButtonGroup,
  FormButton,
  FormButtonText,
  ConfirmationMesssager,
  ConfirmationText,
} from "./styles";
import React, { useState } from "react";
import NavBar from "../../components/navBar";
import Header from "../../components/header";
import { Touch } from "../../styles/globalStyles";
import { GoArrowLeft } from "react-icons/go";
import { registerEmployee } from "services/API/protocol/employee";
import { useFetch } from "hooks/useFetch";
import { protocolApi } from "services/API";
import jwt from "jsonwebtoken";

export const MyProfile = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [departament, setDepartament] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleInputChange = (e) => {
    let inputValue = e.target.value.replace(/\D/g, "");

    if (inputValue.length > 8) {
      inputValue = inputValue.slice(0, 8);
    }

    let maskedValue = inputValue;
    if (inputValue.length >= 5) {
      maskedValue = `${inputValue.slice(0, 2)}/${inputValue.slice(
        2,
        4
      )}/${inputValue.slice(4, 8)}`;
    } else if (inputValue.length >= 3) {
      maskedValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2, 4)}`;
    } else if (inputValue.length >= 1) {
      maskedValue = `${inputValue.slice(0, 2)}`;
    }

    setDisplayValue(maskedValue);

    if (inputValue.length === 8) {
      const day = inputValue.slice(0, 2);
      const month = inputValue.slice(2, 4);
      const year = inputValue.slice(4, 8);
      const isoFormattedDate = `${year}-${month}-${day}T00:00:00`;
      setBirthdate(isoFormattedDate);
    } else {
      setBirthdate("");
    }
  };

  const body = {
    name,
    role,
    email,
    departament,
    birthdate,
    registrationNumber,
    passwordHash: password,
  };

  const token = localStorage.getItem("token");
  const userId = jwt?.decode(token)?.sub;

  const url = `/employee/${userId}`;
  const { data, isLoading } = useFetch(url, {}, !!userId, protocolApi);

  const userProfile = data;

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");

    if (year && month && day) {
      return `${day}/${month}/${year}`;
    }

    return "";
  };

  const handleRegisterEmployee = () => {
    try {
      registerEmployee(body);
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setIsRegister(false);
    }
  };

  return isRegister ? (
    <Container>
      <NavBar />
      <Content>
        <Header title={"DIRETORIA DE GESTÃO ESCOLAR"} headerKey={"profile"} />
        <Profile>
          <TitleArea>
            <Title>Cadastro de Colaborador</Title>
            <Logo src="logo-responsivo.png" />
          </TitleArea>
          <Inputs>
            <InputGroup>
              <InputTitle>Nome completo</InputTitle>
              <Input
                width={"900px"}
                onChange={({ target }) => setName(target.value)}
              />
            </InputGroup>
            <Splited>
              <InputGroup>
                <InputTitle>Email</InputTitle>
                <Input
                  width={"400px"}
                  onChange={({ target }) => setEmail(target.value)}
                />
              </InputGroup>
              <InputGroup>
                <InputTitle>Senha</InputTitle>
                <Input
                  width={"300px"}
                  type="password"
                  onChange={({ target }) => setPassword(target.value)}
                />
              </InputGroup>
            </Splited>
            <Splited>
              <Inputs>
                <InputGroup>
                  <InputTitle>Cargo</InputTitle>
                  <Input
                    width={"400px"}
                    onChange={({ target }) => setRole(target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputTitle>Data de nascimento</InputTitle>
                  <Input
                    width={"300px"}
                    value={displayValue}
                    type="text"
                    maxLength={10}
                    onChange={(value) => handleInputChange(value)}
                  />
                </InputGroup>
              </Inputs>
              <Inputs>
                <InputGroup>
                  <InputTitle>N de matrícula</InputTitle>
                  <Input
                    width={"300px"}
                    onChange={({ target }) =>
                      setRegistrationNumber(target.value)
                    }
                  />
                </InputGroup>
                <InputGroup>
                  <InputTitle>Setor</InputTitle>
                  <Input
                    width={"300px"}
                    onChange={({ target }) => setDepartament(target.value)}
                  />
                </InputGroup>
              </Inputs>
            </Splited>
          </Inputs>
          {confirm ? (
            <ConfirmationMesssager>
              <ConfirmationText>
                Cadastro realizado com sucesso!
              </ConfirmationText>
            </ConfirmationMesssager>
          ) : null}
          <ButtonGroup>
            <FormButton color="#690013">
              <FormButtonText
                onClick={() => {
                  handleRegisterEmployee();
                }}
              >
                Cadastrar
              </FormButtonText>
            </FormButton>
            <FormButton color="#8B642A" onClick={() => setIsRegister(false)}>
              <FormButtonText>Cancelar</FormButtonText>
            </FormButton>
          </ButtonGroup>
        </Profile>
        <BackButtonArea onClick={() => setIsRegister(false)}>
          <Touch>
            <GoArrowLeft size={30} color="#000000" />
          </Touch>
        </BackButtonArea>
      </Content>
    </Container>
  ) : (
    <Container>
      <NavBar />
      <Content>
        <Header title={"DIRETORIA DE GESTÃO ESCOLAR"} headerKey={"profile"} />
        <Profile>
          <TitleArea>
            <Title>Meu Perfil</Title>
            <Logo src="logo-responsivo.png" />
          </TitleArea>
          <Info>
            <InfoGroup>
              <Infos>
                <InfoTitle>Nome</InfoTitle>
                <InfoText>{data?.name}</InfoText>
              </Infos>
              <Infos>
                <InfoTitle>N de matricula</InfoTitle>
                <InfoText>{data?.registrationNumber}</InfoText>
              </Infos>
              <Infos>
                <InfoTitle>Email</InfoTitle>
                <InfoText>{data?.email}</InfoText>
              </Infos>
            </InfoGroup>
            <InfoGroup>
              <Infos>
                <InfoTitle>Cargo</InfoTitle>
                <InfoText>{data?.role}</InfoText>
              </Infos>
              <Infos>
                <InfoTitle>Setor</InfoTitle>
                <InfoText>{data?.departament}</InfoText>
              </Infos>
              <Infos>
                <InfoTitle>Data de nascimento</InfoTitle>
                <InfoText>{formatDate(data?.birthdate)}</InfoText>
              </Infos>
            </InfoGroup>
          </Info>

          <Button onClick={() => setIsRegister(true)}>
            <ButtonText>Adicionar colaborador</ButtonText>
          </Button>
        </Profile>
        <BackButtonArea>
          <Touch>
            <GoArrowLeft size={30} color="#000000" />
          </Touch>
        </BackButtonArea>
      </Content>
    </Container>
  );
};
