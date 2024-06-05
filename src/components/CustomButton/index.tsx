"use client";
import React from "react";
import { Container, ButtonTitle } from "./styles";

export const Button = ({ title, press }) => {
  return (
    <Container onClick={press}>
      <ButtonTitle>{title}</ButtonTitle>
    </Container>
  );
};
