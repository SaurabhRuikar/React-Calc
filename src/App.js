import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import KeyPad from "./components/KeyPad";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }
        else if(button==="C")
        {
          this.setState({
            result:""
          })
        }
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        checkResult = this.state.result

        try {
            this.setState({
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <Result result={this.state.result}/>
                    <KeyPad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;