import Button from "./Button";

type BProps = {
  children: React.ReactNode;
};

const StaticButton = ({ children }: BProps) => {
  return <Button className="bg-error-300">{children}</Button>;
};

export default StaticButton;
