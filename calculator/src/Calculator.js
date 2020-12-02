import React from "react";


const add = (x, y) => x + y
const subtract = (x, y) => x - y
const multiply = (x, y) => x * y
const divide = (x, y) => x / y


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      result: NaN
    }
  }

  setNum1 = e => {
    e.preventDefault()
    this.setState({ num1: e.target.value })
  }

  setNum2 = e => {
    e.preventDefault()
    this.setState({ num2: e.target.value })
  }

  clear = e => {
    e.preventDefault()
    this.setState({ num1: "", num2: "" })
  }

  binaryOperation = op => e => {
    e.preventDefault()
    this.setState(({ num1, num2 }) => ({ 
      result: op(Number(num1), Number(num2))
    }))
  }

  render() {
    const { num1, num2, result } = this.state

    return (
      <div className="Calculator">
        <input onChange={this.setNum1} value={num1}/>
        <input onChange={this.setNum2} value={num2}/>
        <span>= {String(result)}</span>
        <br/>
        {/* <button onClick={this.binaryOperation(add)}>+</button>
        <button onClick={this.binaryOperation(subtract)}>-</button>
        <button onClick={this.binaryOperation(multiply)}>*</button>
        <button onClick={this.binaryOperation(divide)}>/</button> */}
        {buttons.map( (stuff, i) => 
            <button key={i} onClick={this.binaryOperation(stuff.operation)}>
              {stuff.symbol}
            </button>
        )}
        <button onClick={this.clear}>Clear</button>
      </div>
      
    )
  }
}

const buttons = [
  { operation: add,      symbol: "+" },
  { operation: subtract, symbol: "-" },
  { operation: multiply, symbol: "*" },
  { operation: divide,   symbol: "/" }
]

export default Calculator