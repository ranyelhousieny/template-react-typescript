import React from 'react';
import './App.css';

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log('[App.tsx] -- constructor', props, this.state);
  }
  render() {
    // write jscript here
    console.log('[App.tsx] -- render', this.props, this.state);
    return (
      <div className="App">
        <p>By Rany</p>
      </div>
    );
  }
}

export default App;
