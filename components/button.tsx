type ButtonProps = {
  children: React.ReactNode;
  secondary?: boolean;
};

const Button = ({ children, secondary }: ButtonProps) => {
  return <button className={`button ${secondary ? "button-secondary" : ""}`}>{children}</button>;
};

export default Button;
