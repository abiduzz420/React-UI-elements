import React, { Component } from 'react';

import PopoverContainer from './PopoverContainer';
import TabContainer from './TabContainer';
import DropdownContainer from './DropdownContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      // <div>
      //   <div
      //     style={{
      //       display: 'flex',
      //       position: 'relative'
      //     }}
      //     id="app"
      //   >
      //
      //
      //   </div>
      <div>
        <div style={{ display: 'flex' }} id="app">
          {/* <TabContainer />
          <DropdownContainer /> */}
          <PopoverContainer
            id="1"
            content="If only Bradley's arm was longer. Best photo ever. #oscars pic.twitter.com/C9U5NOtGap"
            buttonMarginTop={100}
            buttonMarginLeft={100}
            direction="RIGHT"
          />
          <PopoverContainer
            id="2"
            content="With great power comes great responsibility"
            buttonMarginTop={400}
            buttonMarginLeft={400}
            direction="TOP"
          />
          <PopoverContainer
            id="3"
            content="With great power comes great responsibility"
            buttonMarginTop={300}
            buttonMarginLeft={500}
            direction="LEFT"
          />
        </div>
      </div>
    );
  }
}

export default App;
