import React, { Component } from "react";
import data from "../json/data.json";
import Options from "../components/Options";
import Historial from "../components/Historial";

const choices = [];
let localData = data; //copio el json para poder ir "eliminando" sin problemas futuros
let aux; //auxiliar para avanzar en las decisiones de acuerdo a si es "A" o "B"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      prevSelection: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevState) {
    //si el estado cambia pusheo la seleccion al array choices
    if (prevState.index !== this.state.index) {
      choices.push(this.state.prevSelection);
    }
  }

  handleClick(choiceButton) {
    if (localData[0].id !== "1" && localData.length > 2) {
      //si no es la primer opción ni la ultima
      localData.shift();
    }
    if (localData.length === 2) {
      //Si es la última opción finalizo con alert
      alert("Colorín, colorado... Este cuento se ha terminado");
    } else {
      if (localData.length > 2) {
        //Aún quedan historias para mostrar
        localData.shift(); //Elimino las opciones para ir avanzando en el array
        if (choiceButton === "A") {
          aux = 0;
        } else {
          //Si el botón es B
          aux = 1;
        }
        this.setState({
          //seteo mis nuevos datos en el estado
          index: aux,
          prevSelection: choiceButton
        });
      }
    }
  }

  render() {
    return (
      <div className="layout">
        <h1 className="history">{localData[this.state.index].historia}</h1>
        <Options
          handleClick={this.handleClick}
          optionA={data[this.state.index].opciones.a}
          optionB={data[this.state.index].opciones.b}
        />
        <Historial
          prevSelection={this.state.prevSelection}
          historial={choices.map(
            (e, index) => (
              <span key={index}>{e} - </span>
            ),
            data[this.state.index].id
          )}
        />
      </div>
    );
  }
}

export default Main;
