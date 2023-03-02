import React, { Fragment } from "react";
import Planet from "./planet";

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data;
}

class Planets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            planets: []
        }
    }

    componentDidMount() {
        getPlanets().then(data => {
            this.setState(state => ({
                planets: data['planets']
            }))
        })
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
                        name={planet.name}
                        description={planet.description}
                        img_url={planet.img_url}
                        link={planet.link}
                    />
                )}
            </Fragment>
        )
    }
}

export default Planets;