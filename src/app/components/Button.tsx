type ButtonProps = {
  text: string;
  onClick?: () => void;
  customClass?: string;
};

const Button = ({ text, onClick = () => {}, customClass }: ButtonProps) => {
  return (
    <button onClick={onClick}>
      <div className={`flex flex-row bg-primary-900 rounded-[1.042vw] p-[0.833vw] ${customClass || ""}`}>
        <p className="text-white">{text}</p>
      </div>
    </button>
  );
};

export default Button;
