import { Proyectos } from "../proyectos/Proyectos"
import { Tecnologias } from "../tecnologias/Tecnologias"
import { TextoInfo } from "./TextoInfo"
import "./info.scss"

export const Info = () => {
  return (
    <section className="info">
        <TextoInfo /> 
        <Proyectos />
        <Tecnologias />
    </section>
  )
}
