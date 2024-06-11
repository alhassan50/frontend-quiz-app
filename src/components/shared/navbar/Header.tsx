import { useEffect } from "react"
import { useLocation } from "react-router-dom";

//components
import ColorTheme from "./ColorTheme";

//utils
import getSubject from "../../../lib/getSubject";
import { useDispatch } from "react-redux";
import { selectSubject } from "../../../slices/subjectSlice";
import Logo from "./Logo";


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
    <header className="py-[26px]">
        <div className="flex justify-between items-center gap-4 max-w-[1440px] mx-auto px-[6.5%]">
            <figure>
              {
                selectedSubject && 
                <Logo selectedSubject={selectedSubject} />
              }
            </figure>

            <ColorTheme />
        </div>
    </header>
  )
}
