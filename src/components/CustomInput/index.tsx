"use client";
import React from "react";
import { Container, IconArea, InputBox } from "./styles";
import { IInput } from "./types";
("use Client");

export const Input = ({ placeholder, icon, type, onChange }: IInput) => {
  return (
    <Container>
      <IconArea>{icon}</IconArea>
      <InputBox
        placeholder={placeholder}
        type={type ?? "text"}
        onChange={({ target }) => {
          onChange(target?.value);
        }}
      />
    </Container>
  );
};
