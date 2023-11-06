import { List } from "@/components/List";
import { AddContactButton } from "../../components/AddContactButton";
import { TextInput } from "../../components/design/TextInput";

import { ContactLabelAndButtonBox, Container, IconAndTitle } from "./styles";
import { phonesMock } from "@/utils/phonesMocks";

export function Main() {
  function handleAddContactClick(value: string) {
    console.log(value);
  }

  return (
    <Container>
      <IconAndTitle>
        <span className="material-symbols-outlined">perm_contact_calendar</span>
        <h1>Phone Book App</h1>
      </IconAndTitle>

      <ContactLabelAndButtonBox>
        <p>Contacts</p>
        <AddContactButton />
      </ContactLabelAndButtonBox>

      <TextInput
        placeholder="Search for contact by last name..."
        icon="search"
        onChange={(e) => handleAddContactClick(e.target.value)}
      />

      <List phones={phonesMock} />
    </Container>
  );
}
