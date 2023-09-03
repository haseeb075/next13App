import { MouseEventHandler } from "react";

export default interface CustomButtonProps {
  title: String;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
}

export default interface SearchManufacturerProps {
  manufacturer: string,
  setManufacturer: (manufacturer: string) => void;
}