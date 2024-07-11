import { Experiencia } from "../experiencia/Experiencia"
import { Proyectos } from "../proyectos/Proyectos"
import { SobreMi } from "../sobreMi/SobreMi"
import { Tecnologias } from "../tecnologias/Tecnologias"
import { TextoInfo } from "./TextoInfo"
import "./info.scss"

export const Info = () => {
  return (
    <section className="info">
        <TextoInfo /> 
        <Experiencia />
        <Proyectos />
        <Tecnologias />
        <SobreMi />
    </section>
  )
}
