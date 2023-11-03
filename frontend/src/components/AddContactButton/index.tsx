import { StyledButton } from "./styles";

interface AddContactButtonProps {
  click: () => void;
}

export function AddContactButton({ click }: AddContactButtonProps) {
  return <StyledButton onClick={click}>+ Add Contact</StyledButton>;
}
