import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`px-4 py-2 rounded ${styles}`}>
      {title}
    </button>
  )
}

export default Button;
