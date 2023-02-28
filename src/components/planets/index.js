import React, { Fragment} from "react";
import Planet from "./planet";

function Planets() {
    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr />
            <Planet 
            nome="Mercúrio"
            description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas."
            //link_url="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
            img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Internal_Structure_of_Mercury_%28pt%29.jpg/277px-Internal_Structure_of_Mercury_%28pt%29.jpg"
            titleUnderline={true}
            gray={true}
            />
            <Planet 
            nome="Plutão"
            description="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol."
            link_url="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
            img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/240px-Pluto_in_True_Color_-_High-Res.jpg"
            
            />
        </Fragment>
    )
}

export default Planets;