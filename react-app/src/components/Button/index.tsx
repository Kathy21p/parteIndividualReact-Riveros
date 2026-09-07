import { ReactNode } from "react";
import styles from "./Button.module.css";
import styled from "styled-components";

type BtnProps = {
  isLoading: boolean;
};
const Btn = styled.button<BtnProps>`
  background-color: ${(props) => (props.isLoading ? "gray" : "red")};
  padding: 25px 30px;
`;

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

console.log(styles);
function Button({ children, isLoading, onClick }: Props) {
  const className = [
    `btn btn-${isLoading ? "secondary" : "primary"}`,
    styles.button,
  ].join(" ");

  return (
    <Btn
      onClick={onClick}
      disabled={isLoading}
      isLoading={isLoading}
      //className={[styles.button, styles.padded].join("")}
      className={className}
    >
      {isLoading ? "Cargando..." : children}
    </Btn>
  );
}

export default Button;
