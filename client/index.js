import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title';
import Switch from './components/switch';
import Video from './components/video';

class App extends Component {

  render() {
    return (
      <div>
        <Title />
        <Switch />
        <Video />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
