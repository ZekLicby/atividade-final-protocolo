"use client";
import Header from "../../components/header";
import NavBar from "../../components/navBar";
import {
  Container,
  Content,
  BackButtonArea,
  Touch,
} from "../../styles/globalStyles";
import {
  Area,
  AreaTitle,
  ButtonRegister,
  ButtonTitle,
  Logo,
  ButtonSelectArea,
  RegisterButton,
  RegisterButtonTitle,
  ButtonText,
  SendButton,
  SendButtonTitle,
  SendButtonArea,
  Title,
  FormsArea,
  FormInput,
  InputGroup,
  InputArea,
  InputTitle,
  ButtonGroup,
  FormButton,
  FormButtonText,
} from "./style";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { useRouter } from "next/navigation";
import { postInternalRegister } from "services/API/protocol/intervalRegister";

export const Register = () => {
  const route = useRouter();

  const userToken = localStorage.getItem("token");

  const [token, setToken] = useState("register");

  const [ra, setRa] = useState("");
  const [course, setCourse] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [finalSummary, setFinalSummary] = useState("");
  const [organ, setOrgan] = useState("");
  const [forwardedDate, setForwardedDate] = useState("");
  const [notes, setNotes] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleInputChange = (event) => {
    const input = event.target.value;
    const numericValue = input.replace(/\D/g, "");
    setPhone(numericValue);
  };

  const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length === 0) return "";
    if (phoneNumber.length <= 10) {
      return phoneNumber.replace(
        /^(\d{0,2})(\d{0,4})(\d{0,4})$/,
        (match, p1, p2, p3) => {
          return `(${p1}${p1.length === 2 && p2 ? ") " : ""}${p2}${
            p2.length === 4 && p3 ? "-" : ""
          }${p3}`;
        }
      );
    } else {
      return phoneNumber.replace(
        /^(\d{0,2})(\d{0,5})(\d{0,4})$/,
        (match, p1, p2, p3) => {
          return `(${p1}${p1.length === 2 && p2 ? ") " : ""}${p2}${
            p2.length === 5 && p3 ? "-" : ""
          }${p3}`;
        }
      );
    }
  };

  const handleForwardedInputChange = (e) => {
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
      setForwardedDate(isoFormattedDate);
    } else {
      setForwardedDate("");
    }
  };

  const internalRegisterPostCondition =
    ra &&
    course &&
    phone &&
    subject &&
    finalSummary &&
    organ &&
    forwardedDate &&
    notes;

  const handlePostInternalRegister = () => {
    const body = {
      RA: ra,
      course,
      phone,
      subject,
      finalSummary,
      organ,
      forwardedDate,
      notes,
    };

    console.log("corpo", body);

    if (internalRegisterPostCondition) {
      try {
        postInternalRegister(body);
      } catch (error) {
        console.log("ERROR", error);
      }
    }
  };

  return (
    <Container>
      <NavBar />
      <Content>
        <Header title={"DIRETORIA DE GESTÃO ESCOLAR"} headerKey={"register"} />
        {token === "register" ? (
          <Area>
            <AreaTitle>
              <ButtonRegister>
                <ButtonTitle>Registros</ButtonTitle>
              </ButtonRegister>
              <Logo src="logo-responsivo.png" />
            </AreaTitle>
            <ButtonSelectArea>
              <RegisterButton onClick={() => setToken("register1")}>
                <RegisterButtonTitle>FICHA DE REGISTRO 1</RegisterButtonTitle>
                <ButtonText>
                  Mudança de curso e Turno - Cancelamento - Colação de Grau Guia
                  de Transferência - Trancamento
                </ButtonText>
              </RegisterButton>
              <RegisterButton onClick={() => setToken("register2")}>
                <RegisterButtonTitle>FICHA DE REGISTRO 2</RegisterButtonTitle>
                <ButtonText>Ofício - Notificações - Diversos</ButtonText>
              </RegisterButton>
            </ButtonSelectArea>
            <SendButtonArea>
              <SendButton>
                <SendButtonTitle>Enviar</SendButtonTitle>
              </SendButton>
            </SendButtonArea>
            <BackButtonArea>
              <Touch onClick={() => route.push("/")}>
                <GoArrowLeft size={30} color="#000000" />
              </Touch>
            </BackButtonArea>
          </Area>
        ) : null}
        {token === "register1" ? (
          <Area>
            <AreaTitle>
              <Title>Ficha de Registro 1</Title>
              <Logo src="logo-responsivo.png" />
            </AreaTitle>
            <FormsArea>
              <InputGroup>
                <InputArea>
                  <InputTitle>Requerente</InputTitle>
                  <FormInput
                    onChange={({ target }) => {
                      setRa(target.value);
                    }}
                  />
                </InputArea>
              </InputGroup>
              <InputGroup>
                <InputArea>
                  <InputTitle>Curso</InputTitle>
                  <FormInput
                    onChange={({ target }) => {
                      setCourse(target.value);
                    }}
                  />
                </InputArea>
              </InputGroup>
              <InputGroup gap={"19%"}>
                <InputArea>
                  <InputTitle>Fone</InputTitle>
                  <FormInput
                    type="text"
                    value={formatPhoneNumber(phone)}
                    onChange={handleInputChange}
                    maxLength={15}
                  />
                </InputArea>
                <InputArea>
                  <InputTitle>Assunto</InputTitle>
                  <FormInput
                    width={"600px"}
                    onChange={({ target }) => {
                      setSubject(target.value);
                    }}
                  />
                </InputArea>
              </InputGroup>
              <InputArea>
                <InputTitle>Resumo final</InputTitle>
                <FormInput
                  width={"700px"}
                  onChange={({ target }) => {
                    setFinalSummary(target.value);
                  }}
                />
              </InputArea>
              <AreaTitle>
                <Title>Tramitação</Title>
              </AreaTitle>
              <InputGroup gap={"19%"}>
                <InputArea>
                  <InputTitle>Orgão</InputTitle>
                  <FormInput
                    onChange={({ target }) => {
                      setOrgan(target.value);
                    }}
                  />
                </InputArea>
                <InputGroup gap={"10px"}>
                  <InputArea>
                    <InputTitle>Encaminhado</InputTitle>
                    <FormInput
                      value={displayValue}
                      onChange={(value) => {
                        handleForwardedInputChange(value);
                      }}
                    />
                  </InputArea>
                  <InputArea>
                    <InputTitle>Anotações</InputTitle>
                    <FormInput
                      onChange={({ target }) => {
                        setNotes(target.value);
                      }}
                    />
                  </InputArea>
                </InputGroup>
              </InputGroup>
              <BackButtonArea justify={"space-between"}>
                <Touch onClick={() => setToken("register")}>
                  <GoArrowLeft size={30} color="#000000" />
                </Touch>
                <ButtonGroup>
                  <FormButton
                    onClick={() => handlePostInternalRegister()}
                    color="#690013"
                  >
                    <FormButtonText>Enviar</FormButtonText>
                  </FormButton>
                  <FormButton color="#8B642A">
                    <FormButtonText>Cancelar</FormButtonText>
                  </FormButton>
                </ButtonGroup>
              </BackButtonArea>
            </FormsArea>
          </Area>
        ) : null}
        {token === "register2" ? (
          <Area>
            <AreaTitle>
              <Title>Ficha de Registro 2</Title>
              <Logo src="logo-responsivo.png" />
            </AreaTitle>
            <FormsArea>
              <InputGroup gap={"75px"}>
                <InputArea>
                  <InputTitle>Tipo de Doc.</InputTitle>
                  <FormInput />
                </InputArea>
                <InputArea>
                  <InputTitle>Registrado por</InputTitle>
                  <FormInput />
                </InputArea>
                <InputArea>
                  <InputTitle>curso</InputTitle>
                  <FormInput />
                </InputArea>
              </InputGroup>
              <InputGroup gap={"75px"}>
                <InputArea>
                  <InputTitle>N de matrícula</InputTitle>
                  <FormInput />
                </InputArea>
                <InputArea>
                  <InputTitle>Observações</InputTitle>
                  <FormInput />
                </InputArea>
                <InputArea>
                  <InputTitle>N° de CI</InputTitle>
                  <FormInput />
                </InputArea>
              </InputGroup>
              <InputArea>
                <InputTitle>Assunto</InputTitle>
                <FormInput width={"700px"} />
              </InputArea>
              <AreaTitle>
                <Title>Tramitação</Title>
              </AreaTitle>
              <InputGroup gap={"19%"}>
                <InputArea>
                  <InputTitle>Orgão</InputTitle>
                  <FormInput />
                </InputArea>
                <InputGroup gap={"10px"}>
                  <InputArea>
                    <InputTitle>Encaminhado</InputTitle>
                    <FormInput />
                  </InputArea>
                  <InputArea>
                    <InputTitle>Anotações</InputTitle>
                    <FormInput /* height={'100px'} */ />
                  </InputArea>
                </InputGroup>
              </InputGroup>
              <BackButtonArea justify={"space-between"}>
                <Touch onClick={() => setToken("register")}>
                  <GoArrowLeft size={30} color="#000000" />
                </Touch>
                <ButtonGroup>
                  <FormButton color="#690013">
                    <FormButtonText>Enviar</FormButtonText>
                  </FormButton>
                  <FormButton color="#8B642A">
                    <FormButtonText>Cancelar</FormButtonText>
                  </FormButton>
                </ButtonGroup>
              </BackButtonArea>
            </FormsArea>
          </Area>
        ) : null}
      </Content>
    </Container>
  );
};
