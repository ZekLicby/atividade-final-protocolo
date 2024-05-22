'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ContainerLogin, LoginBox, LogoArea, Logo, BoxTitle, BoxText, Cancel } from '../../globalStyles'
import { TitleArea, Content } from './styles'
import Input from '../../components/input'
import Menssager from '../../components/menssager'
import { GoMail } from 'react-icons/go'
import Button from '../../components/button'

const RecoverPassword = () => {

    const [isSent, setIsSent] = useState(false)

    return (
        isSent
            ?
            <ContainerLogin>
                < LoginBox >
                    <LogoArea>
                        <Logo src={'unicap-logo.png'} />
                    </LogoArea>
                    <TitleArea gap={'41px'}>
                        <BoxTitle size={'20px'}>Recuperação de Senha</BoxTitle>
                    </TitleArea>

                    <TitleArea gap={'26px'}>
                        <BoxText>Olá, Vanessa Ferreira Viera!</BoxText>
                        <Menssager text={'Email de recuperação enviado com sucesso!'} />
                        <BoxText>Acesse o link enviado para sua caixa de email.</BoxText>
                    </TitleArea>

                    <TitleArea>
                        <Link href='/login'>
                            <Cancel>Cancelar</Cancel>
                        </Link>
                    </TitleArea>
                </LoginBox >
            </ContainerLogin >
            :
            < ContainerLogin >
                <LoginBox>
                    <LogoArea>
                        <Logo src={'unicap-logo.png'} />
                    </LogoArea>
                    <TitleArea>
                        <BoxTitle size={'20px'}>Recuperação de Senha</BoxTitle>
                        <BoxText>Para redefinir sua  senha,  informe seu email cadastrado e lhe enviaremos um link com as devidas instruções.</BoxText>
                    </TitleArea>

                    <Input holder={'Digite seu email'} icon={<GoMail size={20} color='#000000' />} />

                    <Button title={'Redefinir senha'} press={() => setIsSent(!isSent)} />
                </LoginBox>
            </ContainerLogin >
    )
}

export default RecoverPassword