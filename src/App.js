import { Component } from 'react';
import './App.css';
import EntityBox from './components/entity-box';

class App extends Component {
  state = {
    entity: {
      name: 'Long name for EntityName',
      type: 'AppTier',
      count: 180,
      connected: true,
    },
    entity1: {
      name: 'Extra extra extra extra extra long name for EntityName field',
      type: 'AppTier',
      count: 10222,
      connected: true,
    }
  }
  render() {
    return (
      <div className="App example-container">
        <div className="example">
          <h2>Example: Small container width</h2>
          <EntityBox entity={this.state.entity} />
        </div>
        <div className="example1">
          <h2>Example: Large container width and large count</h2>
          <EntityBox entity={this.state.entity1} />
        </div>
        <div className="example2">
          <h2>Example: 100% container width</h2>
          <EntityBox entity={this.state.entity} />
        </div>
      </div>
    );
  }

}

export default App;
