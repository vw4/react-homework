import React, {Component} from 'react';
import TransferList from "./components/TransferList";
import './App.css';

const LIST = [
    {
        id: 1,
        title: `Task 1`
    },
    {
        id: 2,
        title: `Task 2`
    },
    {
        id: 3,
        title: `Task 3`
    },
    {
        id: 4,
        title: `Task 4`
    }
];

export default class App extends Component {
    state = {
        leftList: [],
        centerList: [],
        rightList: [],
    }

    componentDidMount() {
        this.setState({leftList: [...LIST]});
    }

    makeMoveFirstElementFunc({from, to}) {
        return () => {
            this.setState({
                [from]: this.state[from].slice(1),
                [to]: [this.state[from][0], ...this.state[to]],
            });
        }
    }

    makeRemoveLastItemFunc({from}) {
        return () => {
            this.setState({
                [from]: this.state[from].slice(0, -1),
            });
        }
    }

    render() {
        return <div className={'App'}>
            <div className={'lists-container'}>
                <TransferList
                    items={this.state.leftList}
                    toRight={this.makeMoveFirstElementFunc({from: 'leftList', to: 'centerList'})}
                />
                <TransferList
                    items={this.state.centerList}
                    toLeft={this.makeMoveFirstElementFunc({from: 'centerList', to: 'leftList'})}
                    toRight={this.makeMoveFirstElementFunc({from: 'centerList', to: 'rightList'})}
                />
                <TransferList
                    items={this.state.rightList}
                    remove={this.makeRemoveLastItemFunc({from: 'rightList'})}
                />
            </div>
        </div>;
    }
}