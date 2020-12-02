import React, { Component } from 'react'
import './Clock.css'


class Clock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: new Date()
    }
    this.setIntervalID = 0

    this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalID = window.setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  tick() {
    this.setState({ time: new Date() })
  }

  render() {

    const { time } = this.state 

    // Date
    const date = time.getDate()
    const year = time.getFullYear()
    const month = time.getMonth() + 1

    // Time
    const hour = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()

    // add leading zero if number is less than 10
    const padZero = (number) => number > 10 ? number : "0" + number 

    return (
      <div className="clock">
        <h1 className="box">
          <span>Date: </span>
          <span>{`${year}/${month}/${date}`}</span>
        </h1>
        <h1 className="box">
          <span>Time: </span>
          <span>{`${hour % 12}:${padZero(minute)}:${padZero(second)} ${hour > 12 ? "PM" : "AM"}`}</span>
        </h1>
      </div>
    )
  }
}

export default Clock