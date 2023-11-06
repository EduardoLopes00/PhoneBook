import { Container } from "./styles";

type PossibleTextInputTypes = "text" | "password" | "email";
type PossibleTextInputIcons = "search" | "user" | "phone";

const icons: { [key: string]: string } = {
  search: "search",
  user: "account_circle",
  phone: "call",
};

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: PossibleTextInputTypes;
  icon: PossibleTextInputIcons;
}

export function TextInput({ type = "text", icon, ...props }: TextInputProps) {
  const iconName = icons[icon];

  return (
    <Container>
      <input type={type} {...props} />
      <span className="material-symbols-outlined">{iconName}</span>
    </Container>
  );
}
