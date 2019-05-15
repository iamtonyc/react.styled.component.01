import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { directive } from '@babel/types';
import {ButtonWrapper} from './components/Button';
import mainBcg from "./images/mainBcg.jpeg";
import secondaryBcg from "./images/secondaryBcg.jpeg";
import Banner from "./components/Banner";
import Header from "./components/Header";

class App extends Component{
  render(){
    return (
      <>
        <Header img={mainBcg}>
          <Banner title="Fresh Coffee is the best">
            <h3>hello world</h3>
            <ButtonWrapper>click me</ButtonWrapper>
          </Banner>
         
        </Header>
        <Header img={mainBcg}/>
      </>
    )
  }
};


export default App;
