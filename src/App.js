import { Component } from 'react';
import './App.css';
import EntityBox from './components/entity-box';

class App extends Component {
  state = {
    entity: {
      name: 'Long name for Type',
      type: 'AppTier',
      count: 20,
      connected: true,
    }
  }
  render() {
    return (
      <div className="App">
        <div className="example">
          <h2>Small container width</h2>
          <EntityBox entity={this.state.entity} />
        </div>
        <div className="example1">
          <h2>Large container width</h2>
          <EntityBox entity={this.state.entity} />
        </div>
        <div className="example2">
          <h2>100% container width</h2>
          <EntityBox entity={this.state.entity} />
        </div>
      </div>
    );
  }

}

export default App;
