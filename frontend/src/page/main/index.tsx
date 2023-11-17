import { List } from "@/components/List";
import { AddContactButton } from "../../components/AddContactButton";
import { TextInput } from "../../components/design/TextInput";

import { ContactLabelAndButtonBox, Container, IconAndTitle } from "./styles";
import { phonesMock } from "@/utils/phonesMocks";

import { RegisterModal } from "../registerModal";

export function Main() {
  function handleAddContactClick() {}

  return (
    <>
      <RegisterModal show={true}></RegisterModal>
      <Container>
        <IconAndTitle>
          <span className="material-symbols-outlined">
            perm_contact_calendar
          </span>
          <h1>Phone Book App</h1>
        </IconAndTitle>

        <ContactLabelAndButtonBox>
          <p>Contacts</p>
          <AddContactButton onClick={handleAddContactClick} />
        </ContactLabelAndButtonBox>

        <TextInput
          placeholder="Search for contact by last name..."
          icon="search"
          onChange={(e) => console.log(e.target.value)}
        />

        <List phones={phonesMock} />
      </Container>
    </>
  );
}
