import React, { Fragment } from "react";
import Planet from "./planet";

class Planets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            planets: [
                {
                    nome: "Mercúrio",
                    description: "Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas.",
                    link_url: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Internal_Structure_of_Mercury_%28pt%29.jpg/277px-Internal_Structure_of_Mercury_%28pt%29.jpg"
                },
                {
                    nome: "Plutão",
                    description: "Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol.",
                    link_url: "https://pt.wikipedia.org/wiki/Plut%C3%A3o",
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/240px-Pluto_in_True_Color_-_High-Res.jpg"
                }
            ]
        }
    }

    removerUltimo = () => {
        let new_planets = [...this.state.planets];
        new_planets.pop();
        this.setState(state => ({
            planets: new_planets
        }))
    }

    duplicarUltimo = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1];
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }))
    }

    render() {
        return (
            <Fragment>
                <h3>Planet List</h3>
                <button onClick={this.removerUltimo}>Remover Último</button>
                <button onClick={this.duplicarUltimo}>Duplicar Último</button>
                <hr />
                {this.state.planets.map((planet) => 
                    <Planet
                        nome={planet.nome}
                        description={planet.description}
                        img_url={planet.img_url}
                        link_url={planet.link_url}
                    />
                )}
            </Fragment>
        )
    }
}

export default Planets;