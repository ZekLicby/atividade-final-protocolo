'use client'
import { Container, Content, Profile, BackButtonArea, Info, InfoGroup, InfoText, InfoTitle, Infos, TitleArea, Title, Logo, Button, ButtonText, InputTitle, Input, InputGroup, Inputs, Splited, ButtonGroup, FormButton, FormButtonText, ConfirmationMesssager, ConfirmationText } from './styles'
import React, { useState } from 'react'
import NavBar from '../../components/navBar'
import Header from '../../components/header'
import { Touch } from '../../globalStyles'
import { GoArrowLeft } from 'react-icons/go'

const MyProfile = () => {

    const [isRegister, setIsRegister] = useState(false)
    const [confirm, setConfirm] = useState(false)

    return (
        isRegister
            ?
            <Container>
                <NavBar />
                <Content>
                    <Header title={'DIRETORIA DE GESTÃO ESCOLAR'} headerKey={'profile'} />
                    <Profile>
                        <TitleArea>
                            <Title>Cadastro de Colaborador</Title>
                            <Logo src='logo-responsivo.png' />
                        </TitleArea>
                        <Inputs>
                            <InputGroup>
                                <InputTitle>Nome completo</InputTitle>
                                <Input width={'900px'}></Input>
                            </InputGroup>
                            <InputGroup>
                                <InputTitle>Email</InputTitle>
                                <Input width={'900px'}></Input>
                            </InputGroup>
                            <Splited>
                                <Inputs>
                                    <InputGroup>
                                        <InputTitle>Cargo</InputTitle>
                                        <Input width={'400px'}></Input>
                                    </InputGroup>
                                    <InputGroup>
                                        <InputTitle>Data de nascimento</InputTitle>
                                        <Input width={'300px'}></Input>
                                    </InputGroup>
                                </Inputs>
                                <Inputs>
                                    <InputGroup>
                                        <InputTitle>N de matrícula</InputTitle>
                                        <Input width={'300px'}></Input>
                                    </InputGroup>
                                    <InputGroup>
                                        <InputTitle>Setor</InputTitle>
                                        <Input width={'300px'}></Input>
                                    </InputGroup>
                                </Inputs>
                            </Splited>
                        </Inputs>
                        {
                            confirm
                                ?
                                <ConfirmationMesssager>
                                    <ConfirmationText>Cadastro realizado com sucesso!</ConfirmationText>
                                </ConfirmationMesssager>
                                :
                                null
                        }
                        <ButtonGroup>
                            <FormButton color='#690013'>
                                <FormButtonText onClick={() => setConfirm(!confirm)}>Cadastrar</FormButtonText>
                            </FormButton>
                            <FormButton color='#8B642A' onClick={() => setIsRegister(false)}>
                                <FormButtonText>Cancelar</FormButtonText>
                            </FormButton>
                        </ButtonGroup>
                    </Profile>
                    <BackButtonArea onClick={() => setIsRegister(false)}>
                        <Touch>
                            <GoArrowLeft size={30} color='#000000' />
                        </Touch>
                    </BackButtonArea>
                </Content>
            </Container>
            :
            <Container>
                <NavBar />
                <Content>
                    <Header title={'DIRETORIA DE GESTÃO ESCOLAR'} headerKey={'profile'} />
                    <Profile>
                        <TitleArea>
                            <Title>Meu Perfil</Title>
                            <Logo src='logo-responsivo.png' />
                        </TitleArea>
                        <Info>
                            <InfoGroup>
                                <Infos>
                                    <InfoTitle>Nome</InfoTitle>
                                    <InfoText>Charly</InfoText>
                                </Infos>
                                <Infos>
                                    <InfoTitle>N de matricula</InfoTitle>
                                    <InfoText>0000000000000</InfoText>
                                </Infos>
                                <Infos>
                                    <InfoTitle>Email</InfoTitle>
                                    <InfoText>charly@unicap.com</InfoText>
                                </Infos>
                            </InfoGroup>
                            <InfoGroup>
                                <Infos>
                                    <InfoTitle>Cargo</InfoTitle>
                                    <InfoText>Gerente</InfoText>
                                </Infos><Infos>
                                    <InfoTitle>Setor</InfoTitle>
                                    <InfoText>Protocolo</InfoText>
                                </Infos><Infos>
                                    <InfoTitle>Data de nascimento</InfoTitle>
                                    <InfoText>20/02/1994</InfoText>
                                </Infos>
                            </InfoGroup>
                        </Info>

                        <Button onClick={() => setIsRegister(true)}>
                            <ButtonText>Adicionar colaborador</ButtonText>
                        </Button>
                    </Profile>
                    <BackButtonArea>
                        <Touch>
                            <GoArrowLeft size={30} color='#000000' />
                        </Touch>
                    </BackButtonArea>
                </Content>
            </Container>
    )
}

export default MyProfile

