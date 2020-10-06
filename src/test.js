import React from 'react';
import './App.css';
import Counter from './'

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count1: 0,
            count2: 0
        };
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(key, number) {
        this.setState({ [key]: this.state[key] + number });
    }


    render() {
        return (
            <div>
                <Counter count={this.state.count} onClick={(num) => this.handleClick('count', num)} />
                <Counter count={this.state.count1} onClick={(num) => this.handleClick('count1', num)} />
                <Counter count={this.state.count2} onClick={(num) => this.handleClick('count2', num)} />
            </div>

        )
    }
}
export default Test;