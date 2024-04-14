import { ButtonHTMLAttributes, FC } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children:
    | React.ReactNode
    | React.FunctionComponentElement<React.SVGAttributes<SVGElement>>;
  className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <button type="button" className={className} {...otherProps}>
      {children}
    </button>
  );
};
