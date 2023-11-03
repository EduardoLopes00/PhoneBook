import { AddContactButton } from "../../components/AddContactButton";
import { ContactLabelAndButtonBox, Container, IconAndTitle } from "./styles";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

export function Main() {
  function handleAddContactClick() {
    alert("Oi Andre");
  }

  return (
    <Container>
      <IconAndTitle>
        <PermContactCalendarIcon fontSize="large" />
        <h1>Phone Book App</h1>
      </IconAndTitle>

      <ContactLabelAndButtonBox>
        <p>Contacts</p>
        <AddContactButton click={handleAddContactClick} />
      </ContactLabelAndButtonBox>
    </Container>
  );
}
