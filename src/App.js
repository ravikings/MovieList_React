import logo from './logo.svg';
import Movies from './components/movies'
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';


class App extends Component {
  render() {
    return (
      <main className="container">
          <Movies />
      </main>
    );
  }
}

export default App;
