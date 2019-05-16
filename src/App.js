import React,{Component} from 'react';
import {DangerButton, SuccessButton} from "./components/Buttons";
import Form from './components/Form.js'
import {ThemeProvider} from 'styled-components'
import {RedTheme,GreenTheme} from './components/Theme.js'

class App extends Component{
  state={
    theme:RedTheme
  }

  setRedTheme=()=>{
    this.setState({
      theme:RedTheme
    })
  }
  setGreenTheme=()=>{
    this.setState({
      theme:GreenTheme
    })
  }
  render(){
    return (
      <>
        <ThemeProvider theme={this.state.theme}>
        <div>
          <SuccessButton onClick={this.setGreenTheme}>Success</SuccessButton>
          <DangerButton onClick={this.setRedTheme}>Danger</DangerButton>
          <Form />
        </div>
        </ThemeProvider>
       </>
    )
  }
};


export default App;
