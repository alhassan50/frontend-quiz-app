import { Link, useLocation } from "react-router-dom"
import { ErrorMessageContainer, SubjectNotFoundFlexContainer } from "../styles/quiz/SubjectNotFound.styles"

export default function SubjectNotFound() {
    const location = useLocation()
    const pathname = location.pathname.split('/')[1]
  return (
    <SubjectNotFoundFlexContainer>
        <div>
            <ErrorMessageContainer>
                <h1 className="">
                    Ooops :(
                </h1>

                <p>
                    Quiz for <span>{pathname}</span> was not found.
                </p>
            </ErrorMessageContainer>
            <Link to={'/'}>
                <button
                    type="button"
                    className="btn-primary"
                >
                    Go Home
                </button>
            </Link>
        </div>
    </SubjectNotFoundFlexContainer>
  )
}
