import { MouseEvent, ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  className?: string;
  id?: string;
  children?: ReactNode;
  onClick: (e: MouseEvent) => void;
}

const Button = ({ className = "", id, children, onClick }: Props) => {
  const classNames = `${styles.button} ${className}`;
  return (
    <button className={classNames} id={id} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
