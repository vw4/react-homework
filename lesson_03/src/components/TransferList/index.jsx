import React, {Component} from 'react';
import './style.css';

export default class TransferList extends Component {
    render() {
        return <div className={'list'}>
            <ul>
                {this.props.items.map((item) => <li key={item.id}>{item.title}</li>)}
            </ul>
            {this.props.items.length
                ? <>
                    {this.props.toLeft && <button onClick={this.props.toLeft}>Transfer first to left</button>}
                    {this.props.remove && <button onClick={this.props.remove}>Remove last item</button>}
                    {this.props.toRight && <button onClick={this.props.toRight}>Transfer first to right</button>}
                </>
                : null
            }
        </div>
    }
}