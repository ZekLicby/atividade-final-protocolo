"use client";
import { Container, Content } from "../../styles/globalStyles";
import React, { useState } from "react";
import {
  Area,
  AreaTitle,
  PageTitle,
  RequirementContent,
  RequirementArea,
  Number,
  Date,
  Pagination,
  PageNumber,
} from "./styles";
import NavBar from "../../components/navBar";
import Header from "../../components/header";
import {
  FormInput,
  FormsArea,
  InputGroup,
  InputArea,
  InputTitle,
  ButtonGroup,
  FormButton,
  FormButtonText,
} from "../Register/style";
import { BackButtonArea, Touch } from "../../styles/globalStyles";
import { GoArrowLeft } from "react-icons/go";
import { useFetch } from "../../hooks/useFetch";
import { protocolApi } from "../../services/API";

export const Requirement = () => {
  const url1 = "/internalRegister";
  //const url2 = "/externalRegister";

  const { data: registrosInternos } = useFetch(url1, {}, true, protocolApi);
  //const { data: registrosExternos } = useFetch(url2, {}, true, protocolApi);

  console.log("data", registrosInternos);
  //console.log("data", registrosExternos);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = registrosInternos?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState();

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const selectRequirement = (index) => {
    setSelectedRequirement(registrosInternos[index]);
    setIsOpen(true);
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <Container>
      <NavBar />
      <Content>
        <Header title={"DIRETORIA DE GESTÃO ESCOLAR"} headerKey={"consult"} />
        {isOpen ? (
          <Area>
            <FormsArea>
              <InputArea>
                <InputTitle>Requerente</InputTitle>
                <FormInput value={"Carlos"} width={"620px"} />
              </InputArea>
              <InputGroup gap={"75px"}>
                <InputArea>
                  <InputTitle>RA</InputTitle>
                  <FormInput value={selectedRequirement?.RA} />
                </InputArea>
                <InputArea>
                  <InputTitle>Curso</InputTitle>
                  <FormInput value={selectedRequirement?.course} />
                </InputArea>
                <InputArea>
                  <InputTitle>Tipo de entrada</InputTitle>
                  <FormInput />
                </InputArea>
              </InputGroup>
              <InputArea>
                <InputTitle>Assunto</InputTitle>
                <FormInput value={selectedRequirement?.subject} />
              </InputArea>
              <InputArea>
                <InputTitle>Resumo Final</InputTitle>
                <FormInput
                  value={selectedRequirement?.finalSummary}
                  width={"620px"} /* height={'200px'} */
                />
              </InputArea>
              <AreaTitle>
                <PageTitle>Histórico de transmição</PageTitle>
              </AreaTitle>
              <InputGroup gap={"75px"}>
                <InputArea>
                  <InputTitle>RA</InputTitle>
                  <FormInput />
                  <FormInput />
                  <FormInput />
                </InputArea>
                <InputArea>
                  <InputTitle>Curso</InputTitle>
                  <FormInput />
                  <FormInput />
                  <FormInput />
                </InputArea>
                <InputArea>
                  <InputTitle>Tipo de entrada</InputTitle>
                  <FormInput />
                  <FormInput />
                  <FormInput />
                </InputArea>
              </InputGroup>
            </FormsArea>
            <BackButtonArea justify={"space-between"}>
              <Touch onClick={() => setIsOpen(false)}>
                <GoArrowLeft size={30} color="#000000" />
              </Touch>
              <ButtonGroup>
                <FormButton color="#690013" onClick={() => setIsOpen(false)}>
                  <FormButtonText>Enviar</FormButtonText>
                </FormButton>
                <FormButton color="#8B642A" onClick={() => setIsOpen(false)}>
                  <FormButtonText>Cancelar</FormButtonText>
                </FormButton>
              </ButtonGroup>
            </BackButtonArea>
          </Area>
        ) : (
          <Area>
            <AreaTitle>
              <PageTitle>Requerimentos</PageTitle>
            </AreaTitle>
            <RequirementContent>
              {registrosInternos?.map((item, index) => (
                <RequirementArea
                  key={item.id}
                  onClick={() => selectRequirement(index)}
                >
                  <Number>Requerimento {index + indexOfFirstItem + 1}</Number>
                  <Date>07/10/2023 08:30PM</Date>
                </RequirementArea>
              ))}
            </RequirementContent>
            <Pagination>
              {Array.from(
                { length: Math.ceil(registrosInternos?.length / itemsPerPage) },
                (_, i) => (
                  <PageNumber key={i} onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </PageNumber>
                )
              )}
            </Pagination>
          </Area>
        )}
      </Content>
    </Container>
  );
};
