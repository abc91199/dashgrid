import React, {Component} from 'react';
import {GridComponent} from '../src';

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
                <h1>dashgrid Demo</h1>

                <hr/>
                <h2>GridComponent</h2>
                <GridComponent
                    label="This is an example label"
                    value={this.state.value}
                    setProps={newProps => this.setState({value: newProps.value})}
                />
                <hr/>
            </div>
        );
    }
}

export default Demo;
