'use client'
import Header from "../../components/header"
import NavBar from "../../components/navBar"
import { Container, Content, BackButtonArea, Touch } from "../../globalStyles"
import { Area, AreaTitle, ButtonRegister, ButtonTitle, Logo, ButtonSelectArea, RegisterButton, RegisterButtonTitle, ButtonText, SendButton, SendButtonTitle, SendButtonArea, Title, FormsArea, FormInput, InputGroup, InputArea, InputTitle, ButtonGroup, FormButton, FormButtonText } from "./style"
import { useState } from "react"
import { GoArrowLeft } from "react-icons/go"
import { useRouter } from "next/navigation"

const Register = () => {

    const route = useRouter()
    const [token, setToken] = useState('register')

    return (
        <Container>
            <NavBar />
            <Content>
                <Header title={'DIRETORIA DE GESTÃO ESCOLAR'} headerKey={'register'} />
                {
                    token === 'register'
                        ?
                        <Area>
                            <AreaTitle>
                                <ButtonRegister>
                                    <ButtonTitle>Registros</ButtonTitle>
                                </ButtonRegister>
                                <Logo src='logo-responsivo.png' />
                            </AreaTitle>
                            <ButtonSelectArea>
                                <RegisterButton onClick={() => setToken('register1')}>
                                    <RegisterButtonTitle>FICHA DE REGISTRO 1</RegisterButtonTitle>
                                    <ButtonText>Mudança de curso e Turno - Cancelamento - Colação de Grau
                                        Guia de Transferência - Trancamento</ButtonText>
                                </RegisterButton>
                                <RegisterButton onClick={() => setToken('register2')}>
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
                                <Touch onClick={() => route.push('/')}>
                                    <GoArrowLeft size={30} color='#000000' />
                                </Touch>
                            </BackButtonArea>
                        </Area>
                        :
                        null
                }
                {
                    token === 'register1'
                        ?
                        <Area>
                            <AreaTitle>
                                <Title>Ficha de Registro 1</Title>
                                <Logo src="logo-responsivo.png" />
                            </AreaTitle>
                            <FormsArea>
                                <InputGroup>
                                    <InputArea>
                                        <InputTitle>Requerente</InputTitle>
                                        <FormInput />
                                    </InputArea>
                                    <InputArea>
                                        <InputTitle>Requerente</InputTitle>
                                        <FormInput />
                                    </InputArea>
                                </InputGroup>
                                <InputGroup>
                                    <InputArea>
                                        <InputTitle>Endereço completo</InputTitle>
                                        <FormInput />
                                    </InputArea>
                                    <InputArea>
                                        <InputTitle>Curso</InputTitle>
                                        <FormInput />
                                    </InputArea>
                                </InputGroup>
                                <InputGroup gap={'19%'}>
                                    <InputArea>
                                        <InputTitle>Fone</InputTitle>
                                        <FormInput />
                                    </InputArea>
                                    <InputArea>
                                        <InputTitle>Assunto</InputTitle>
                                        <FormInput width={'600px'} />
                                    </InputArea>
                                </InputGroup>
                                <InputArea>
                                    <InputTitle>Resumo final</InputTitle>
                                    <FormInput /* height={'200px'} */ width={'700px'} />
                                </InputArea>
                                <AreaTitle>
                                    <Title>Tramitação</Title>
                                </AreaTitle>
                                <InputGroup gap={'19%'}>
                                    <InputArea>
                                        <InputTitle>Orgão</InputTitle>
                                        <FormInput />
                                    </InputArea>
                                    <InputGroup gap={'10px'}>
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
                                <BackButtonArea justify={'space-between'}>
                                    <Touch onClick={() => setToken('register')}>
                                        <GoArrowLeft size={30} color='#000000' />
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
                        :
                        null
                }
                {
                    token === 'register2'
                        ?
                        <Area>
                            <AreaTitle>
                                <Title>Ficha de Registro 2</Title>
                                <Logo src="logo-responsivo.png" />
                            </AreaTitle>
                            <FormsArea>
                                <InputGroup gap={'75px'}>
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
                                <InputGroup gap={'75px'}>
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
                                    <FormInput /* height={'200px'} */ width={'700px'} />
                                </InputArea>
                                <AreaTitle>
                                    <Title>Tramitação</Title>
                                </AreaTitle>
                                <InputGroup gap={'19%'}>
                                    <InputArea>
                                        <InputTitle>Orgão</InputTitle>
                                        <FormInput />
                                    </InputArea>
                                    <InputGroup gap={'10px'}>
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
                                <BackButtonArea justify={'space-between'}>
                                    <Touch onClick={() => setToken('register')}>
                                        <GoArrowLeft size={30} color='#000000' />
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
                        :
                        null
                }
            </Content>
        </Container>
    )
}

export default Register