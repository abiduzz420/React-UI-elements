import React, { Component } from 'react';
import './App.css';

class DropdownContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      isExpanded: false
    };
  }

  onClick = () => {
    this.setState({
      isClicked: true,
      isExpanded: !this.state.isExpanded
    });
    console.log('onClick');
  };

  handleBodyClick = e => {
    console.log('handleBodyClick', e.target.id);
    if (e.target.id !== 'trigger') {
      this.setState({ isExpanded: false, isClicked: false });
    }
  };

  componentDidMount() {
    document.addEventListener('click', this.handleBodyClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleBodyClick);
  }

  render() {
    const dropdownContainerStyle = {
      display: 'block',
      position: 'absolute',
      backgroundColor: '#fff',
      left: '200px',
      top: '10px'
    };
    return (
      <div style={dropdownContainerStyle} id="dropdown">
        <DropdownTrigger
          isExpanded={this.state.isExpanded}
          isClicked={this.state.isClicked}
          onSelect={() => this.onClick()}
        />
        <DropdownItems
          isExpanded={this.state.isExpanded}
          visible={this.state.isClicked}
        />
      </div>
    );
  }
}

class DropdownTrigger extends Component {
  render() {
    let triggerStyle = this.props.isClicked && this.props.isExpanded
      ? {
          backgroundColor: '#EEEEEE'
        }
      : {};
    return (
      <div>
        <div
          id="trigger"
          onClick={this.props.onSelect}
          style={triggerStyle}
          className="trigger"
        >
          <div id="trigger">Dropdown </div>
          <div className="fa fa-caret-down" style={{ marginTop: '6px' }} />
        </div>
      </div>
    );
  }
}

class DropdownItems extends Component {
  render() {
    const itemContent = ['Action', 'Another action', 'Something else here'];
    const itemStyle = {
      margin: '3px 0px',
      padding: '6px 0 6px 15px',
      verticalAlign: 'middle'
    };
    const divItemStyle = {
      border: '1px solid rgba(0,0,0,.15)',
      borderRadius: '4px',
      width: '170px',
      color: '#333',
      cursor: 'pointer',
      fontFamily: 'Arial',
      marginTop: '3px',
      boxShadow: '0 6px 12px rgba(0,0,0,.175)'
    };
    if (this.props.visible && this.props.isExpanded) {
      return (
        <div id="menu" style={divItemStyle}>
          {itemContent.map((value, key) =>
            <div key={key} id="item-style" style={itemStyle}>{value}</div>
          )}
          <hr style={{ margin: '6px 0px' }} />
          <div id="item-style" style={itemStyle}>Separated link</div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default DropdownContainer;
