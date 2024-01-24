import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Linguagens"/>
        <div className="languages-info">
          <span>🇺🇸 EN - Basic</span>
          <span>🇧🇷 PT-BR - Nativo</span>
        </div>
        <SectionTitle text="Educação"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Bacharelado em sistemas de informação - Horus Faculdade</span>
        </div>
      </div>
    )
}