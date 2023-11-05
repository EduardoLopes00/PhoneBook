import { AddContactButton } from "../../components/AddContactButton";
import { TextInput } from "../../components/design/TextInput";

import { ContactLabelAndButtonBox, Container, IconAndTitle } from "./styles";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

export function Main() {
  function handleAddContactClick(value: string) {
    console.log(value);
  }

  return (
    <Container>
      <IconAndTitle>
        <PermContactCalendarIcon fontSize="large" />
        <h1>Phone Book App</h1>
      </IconAndTitle>

      <ContactLabelAndButtonBox>
        <p>Contacts</p>
        <AddContactButton />
      </ContactLabelAndButtonBox>

      <TextInput
        placeholder="Search for contact by last name..."
        onChange={(e) => handleAddContactClick(e.target.value)}
      />
    </Container>
  );
}
