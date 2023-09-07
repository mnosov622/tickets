import "./Container.css";

interface ContainerProps {
  children: React.ReactChild;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="container">{children}</div>;
};

export default Container;
