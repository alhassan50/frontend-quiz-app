//styles
import { Container } from "../../styles/navbar/Logo.styles";

export default function Logo({ selectedSubject }: { selectedSubject: Subject }) {
  return (
    <Container $bgColor={selectedSubject.color}>
      <figure>
        <img 
          src={selectedSubject.icon}
          alt={selectedSubject.title}
        />
      </figure>
      <h3>
        {selectedSubject.title}
      </h3>
    </Container>
  );
}
