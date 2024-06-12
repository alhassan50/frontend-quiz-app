import { useEffect } from "react"
import { useLocation } from "react-router-dom";

//components
import ColorTheme from "./ColorTheme";
import Logo from "./Logo";

//utils
import getSubject from "../../../lib/getSubject";

//redux
import { useDispatch } from "react-redux";
import { selectSubject } from "../../../slices/subjectSlice";

//styles
import { Container, Content } from "../../styles/navbar/Header.styles";


export default function Header() {
  const location = useLocation()
  const dispatch = useDispatch()

  const path = location.pathname

  //get quiz selected subject
  const selectedSubject = getSubject(path)

  //set selected to subject
  useEffect(() => {
    dispatch(selectSubject(selectedSubject))
  }, [dispatch, selectedSubject])

  return (
    <Container>
        <Content>
            <figure>
              {
                selectedSubject && 
                <Logo selectedSubject={selectedSubject} />
              }
            </figure>

            <ColorTheme />
        </Content>
    </Container>
  )
}
