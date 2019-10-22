import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionType from '../../containers/store/action'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter} />

                <hr />
                Click Store Button to store the result...
                <hr />

                <button className="CounterControl" onClick={this.props.onStoreResult}>Store Result</button>
                <div>
                    <ul>
                        {this.props.storedResults.map((strResults) => (
                            <li onClick={() => this.props.onDeleteResult(strResults.id)}>{strResults.value}</li>
                        ))}
                    </ul>
                </div>
                <hr />
                    Click on the stored value to delete the values...
                <hr />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionType.INCREMENT, value: 1 }),
        onDecrementCounter: () => dispatch({ type: actionType.DECREMENT, value: 1 }),
        onAddCounter: () => dispatch({ type: actionType.ADD, value: 10 }),
        onSubtractCounter: () => dispatch({ type: actionType.SUBTRACT, value: 10 }),
        onStoreResult: () => dispatch({ type: actionType.STORE_RESULT }),
        onDeleteResult: (id) => dispatch({ type: actionType.DELETE_RESULT, resultElId: id })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);