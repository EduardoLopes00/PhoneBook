import { StyledButton } from "./styles";

interface AddContactButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function AddContactButton({ ...props }: AddContactButtonProps) {
  return <StyledButton {...props}>+ Add Contact</StyledButton>;
}
