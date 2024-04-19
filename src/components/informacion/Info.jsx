import { Tecnologias } from "../tecnologias/Tecnologias"
import { TextoInfo } from "./TextoInfo"
import "./info.scss"

export const Info = () => {
  return (
    <section className="info">
        <TextoInfo /> 
        <Tecnologias />
    </section>
  )
}
