import { Component } from 'react';
import Card from './Card.js';
class RickAndMortyClass extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            id: 1,
        }
    }


    request = async () => {
        if(this.state.id > 0) {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`);
            const result = await response.json();
            console.log(result);
            this.setState({data: result});
        }
    }

    incrementId = arg => {
        if(arg === "prev") {   
            if(this.state.id > 1) {
                this.setState(prevState => ({id: prevState.id - 1}));
            }
        } else if(arg === "next") {
            this.setState(prevState => ({id: prevState.id + 1}));
        }
        
        console.log(this.state.id);
    }

    componentDidMount() {
        this.request();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.id !== this.state.id) {
            this.request();
        }

    }

    render() {
        return(
            <div className={this.props.nameClass}>
                <Card name={this.state.data.name} img={this.state.data.image} incrementId={this.incrementId} text="Componente Clase" />
            </div>
        )
    }
}

export default RickAndMortyClass;