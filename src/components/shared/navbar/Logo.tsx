import styled from "styled-components";

interface Subject {
  color: string;
  icon: string;
  title: string;
}

interface FigureProps {
  bgColor?: string;
}

const Container = styled.div<FigureProps>`
    display: flex;
    gap: 16px;
    align-items: center;
    
    @media (min-width: 640px) {
        gap: 32px;
    }

    figure {
        padding: 8px;
        width: 40px;
        height: 40px;
        border-radius: 6px;
        background-color: ${(props) => props.bgColor || '#fff'};

        @media (min-width: 640px) {
            width: 48px;
            height: 48px;
        }

        @media (min-width: 768px) {
            width: 56px;
            height: 56px;
        }
    }
`

export default function Logo({ selectedSubject }: { selectedSubject: Subject }) {
  return (
    <Container bgColor={selectedSubject.color}>
      <figure>
        <img 
          src={selectedSubject.icon}
          alt={selectedSubject.title}
          className="w-full h-full"
        />
      </figure>
      <h3>
        {selectedSubject.title}
      </h3>
    </Container>
  );
}
