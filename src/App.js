import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { directive } from '@babel/types';
// import Heading from './components/Heading';
import {ButtonWrapper} from './components/Button';


class App extends Component{
  render(){
    return (
        <div>
            <ButtonWrapper color="#f15025" background="blue">Styled components</ButtonWrapper>
            <Heading></Heading>
        </div>
    )
  }
};

/* function App() {
  return (
      <div>

      </div>


  );
} */


export default App;
