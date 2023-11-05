import { StyledInput } from "./styles";

type PossibleTextInputTypes = "text" | "password" | "email";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: PossibleTextInputTypes;
}

export function TextInput({ type = "text", ...props }: TextInputProps) {
  return <StyledInput type={type} {...props} />;
}
