import React from 'react';
import ReactDOM from 'react-dom';
import "./app.css";
import './style.scss';
import img from './file.png';

class App extends React.Component {
    render() {
        return(
            <>
            <h1>Hello world</h1>
           
            </>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));