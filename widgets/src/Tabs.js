import React, { Component } from 'react'
import Header from './Header'

import PropTypes from 'prop-types'
import './Tabs.css'

class Tabs extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentTabIndex: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(i) {
    return () => this.setState({ currentTabIndex: i })
  }

  render() {
    const { tabs } = this.props
    const { currentTabIndex } = this.state 

    const indexedTabs = tabs.map(({ title, content }, i) => (
      <li onClick={this.handleClick(i)} key={i}>
        <Header title={title} 
                isSelected={i === currentTabIndex}/>
      </li>
    ))

    return (
      <div className="tabs">
        {/* {JSON.stringify(this.props.tabs)} */}
        <ul>
          {indexedTabs}
        </ul>
        <article>
          {tabs.find((tab, i) => i === currentTabIndex).content}
        </article>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Tabs;