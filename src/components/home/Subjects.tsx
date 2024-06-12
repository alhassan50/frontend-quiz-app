import { Link } from "react-router-dom"

//utils
import getAllSubjects from "../../lib/getAllSubjects"

//styles
import { SubjectsContainer, SubjectCard } from "../styles/home/Subjects.styles"

export default function Subject() {
    const subject = getAllSubjects()

    return (
        <SubjectsContainer>
            {
                subject.map((subject: Subject) => (
                    <li key={subject.title}>
                        <Link to={`/${subject.title}`} >
                            <SubjectCard $backgroundColor={subject.color}>
                                <figure>
                                    <img 
                                        src={subject.icon}
                                        alt={subject.title}
                                    />
                                </figure>
                                <h3>
                                    {subject.title}
                                </h3>
                            </SubjectCard>
                        </Link>
                    </li>
                ))
            }
        </SubjectsContainer>
    )
}