import React, { Component } from 'react';

import './App.css';

class TabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      displayMessage: ''
    };
  }

  update = (id, tabInfo) => {
    if (this.state.selectedTab === id) {
      this.setState({
        selectedTab: 0,
        displayMessage: ''
      });
    } else {
      this.setState({
        selectedTab: id,
        displayMessage: tabInfo[id - 1]
      });
    }
  };

  render() {
    const tabInfo = [
      'Abraham Lincoln was an American politician and lawyer who served as the 16th President of the United States from March 1861 until his assassination in April 1865.',
      'Franklin Delano Roosevelt, commonly known as FDR, was an American statesman and political leader who served as the 32nd President of the United States from 1933 until his death in 1945.',
      'Barack Hussein Obama II is an American politician who served as the 44th President of the United States from 2009 to 2017. He is the first African American to have served as president.'
    ];
    return (
      <div
        style={{
          position: 'absolute'
        }}
      >
        <div style={{ display: 'flex' }}>
          <Tab
            name="Tab 1"
            selectedTab={this.state}
            onSelect={() => this.update(1, tabInfo)}
          />
          <Tab
            name="Tab 2"
            selectedTab={this.state}
            onSelect={() => this.update(2, tabInfo)}
          />
          <Tab
            name="Tab 3"
            selectedTab={this.state}
            onSelect={() => this.update(3, tabInfo)}
          />
        </div>
        <TabContent message={this.state.displayMessage} />
      </div>
    );
  }
}

class Tab extends Component {
  render() {
    return (
      <div id="item-bar" onClick={this.props.onSelect}>
        {this.props.name}
      </div>
    );
  }
}

class TabContent extends Component {
  render() {
    return (
      <div>
        {this.props.message}
      </div>
    );
  }
}

export default TabContainer;
