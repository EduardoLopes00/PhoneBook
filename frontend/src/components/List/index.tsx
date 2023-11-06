import { Phone } from "@/types/Book";
import { Container } from "./styles";
import { ListElement } from "../ListElement";

interface ListProps {
  phones: Phone[];
}

export function List({ phones }: ListProps) {
  return (
    <Container>
      {phones.map((phone) => {
        return <ListElement phone={phone} key={phone.id} />;
      })}
    </Container>
  );
}
