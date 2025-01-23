
interface InnerComponentProps {
  name: string;
}

const InnerComponent: React.FC<InnerComponentProps> = ({ name }) => {
  return <p>Inner Component: Hello, {name}!</p>;
};

export default InnerComponent;
