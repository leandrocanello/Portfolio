import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Sobre mim"/>
          <p>Desenvolvedor Back-End á 6 meses, atualmente trabalhando em JB Software, empresa que atua a mais de 30 anos no mercado 
            desenvolvendo soluções para contadores.
          </p>
          <SectionTitle text="Experiencias"/>
          <h3>JB Software</h3>
          <p>Estágio de seis meses em JB Software.</p>
          <h3>Zagonal ltda</h3>
          <p>Nove meses atuando como help desk na insfraestrutura em Zagonel ltda.</p>
          <div className="experience-time">
            <Skill image="/spring.png" measure={3} years="1 ano"/>
            <Skill image="/js.png" measure={3} years="1 ano"/>
            <Skill image="/java.png" measure={3} years="1 ano"/>
          </div>
        </div>
    )
}