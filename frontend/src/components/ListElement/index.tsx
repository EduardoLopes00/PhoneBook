import { Phone } from "@/types/Book";
import { Container, DeleteButton, NameAndPhoneContainer } from "./styles";

interface ListElementProps {
  phone: Phone;
}

export function ListElement({ phone }: ListElementProps) {
  return (
    <Container>
      <NameAndPhoneContainer>
        <p>
          {phone.name} {phone.lastName}
        </p>
        <div>
          <span className="material-symbols-outlined">call</span>{" "}
          <span>{phone.phoneNumber}</span>
        </div>
      </NameAndPhoneContainer>
      <DeleteButton>
        <span className="material-symbols-outlined">delete</span>
      </DeleteButton>
    </Container>
  );
}
