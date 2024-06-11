import { useEffect } from "react"
import { useLocation } from "react-router-dom";

//components
import ColorTheme from "./ColorTheme";

//utils
import getSubject from "../../../lib/getSubject";
import { useDispatch } from "react-redux";
import { selectSubject } from "../../../slices/subjectSlice";
import Logo from "./Logo";
import styled from "styled-components";

const Container = styled.header`
    padding-block: 26px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 6.5%;
  padding-left: 6.5%;
`


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
