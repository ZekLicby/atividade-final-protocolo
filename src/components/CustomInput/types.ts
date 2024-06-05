import {
  ChangeEventHandler,
  Dispatch,
  ReactElement,
  SetStateAction,
} from "react";

type InputType = "text" | "password";

export interface IInput {
  placeholder: string;
  icon: ReactElement;
  type: InputType;
  onChange?: Dispatch<SetStateAction<any>>;
}
