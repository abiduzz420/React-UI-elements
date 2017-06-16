import React, { Component } from 'react';
import './App.css';

class PopoverContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popVisible: false,
      buttonWidth: null,
      buttonHeight: null
    };
  }

  componentDidMount() {
    let btnEle = document.getElementById('pop-btn');
    let position = btnEle.getBoundingClientRect();

    this.setState({
      buttonWidth: position.width,
      buttonHeight: position.height
    });
  }

  render() {
    const popContainerStyle = {
      position: 'absolute'
    };

    const triggerStyle = {
      zIndex: '1',
      position: 'relative',
      marginTop: this.props.buttonMarginTop,
      marginLeft: this.props.buttonMarginLeft
    };

    return (
      <div style={popContainerStyle}>
        <button
          id="pop-btn"
          onClick={() => this.setState({ popVisible: !this.state.popVisible })}
          style={triggerStyle}
        >
          Popover on {this.props.direction}
        </button>
        <PopoverContent
          id={this.props.id}
          direction={this.props.direction}
          buttonMarginLeft={this.props.buttonMarginLeft}
          buttonMarginTop={this.props.buttonMarginTop}
          buttonWidth={this.state.buttonWidth}
          buttonHeight={this.state.buttonHeight}
          contentHeight={this.state.contentHeight}
          content={this.props.content}
          popVisible={this.state.popVisible}
        />

      </div>
    );
  }
}

class PopoverContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentHeight: 0
    };
    this.contentWidth = 200;
  }
  componentWillUpdate() {
    let contentEle = document.getElementById(this.props.id);
    let contentPos = contentEle.getBoundingClientRect();
    if (this.props.popVisible) {
      this.setState({
        contentHeight: contentPos.height
      });
    }
  }
  render() {
    console.log('width', this.contentWidth);
    console.log('buttonMarginLeft', this.props.buttonMarginLeft);
    let top = null;
    let left = null;
    switch (this.props.direction) {
      case 'RIGHT':
        top =
          this.props.buttonMarginTop -
          (this.state.contentHeight - this.props.buttonHeight) / 2;
        left = this.props.buttonWidth + this.props.buttonMarginLeft + 10;
        break;
      case 'LEFT':
        top =
          this.props.buttonMarginTop -
          (this.state.contentHeight - this.props.buttonHeight) / 2;
        left = this.props.buttonMarginLeft - this.contentWidth - 30;
        break;
      default:
        break;
    }

    const infoStyle = {
      position: 'absolute',
      width: this.contentWidth,
      top: top,
      left: left,
      border: '1px solid rgba(0, 0, 0, 0.2)',
      padding: '10px 10px',
      zIndex: '100',
      background: '#fff',
      borderRadius: '4px'
    };
    if (this.props.popVisible)
      return (
        <div ref="content" id={this.props.id} style={infoStyle}>
          {this.props.content}
        </div>
      );
    else return <div id={this.props.id} />;
  }
}

export default PopoverContainer;
