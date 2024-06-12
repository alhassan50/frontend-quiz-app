import { useEffect } from "react"
import { useLocation } from "react-router-dom";

//components
import ColorTheme from "./ColorTheme";

//utils
import getSubject from "../../../lib/getSubject";
import { useDispatch } from "react-redux";
import { selectSubject } from "../../../slices/subjectSlice";
import Logo from "./Logo";
import { Container, Content } from "../../styles/navbar/Header.styles";


export default function Header() {
  const location = useLocation()
  const dispatch = useDispatch()

  const path = location.pathname

  //get quiz selected subject
  const selectedSubject = getSubject(path)

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
