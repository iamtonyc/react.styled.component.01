import React, {Component} from "react";
import styled from 'styled-components'

export const InputBasic = styled.input`
    font-size: 1rem;
    margin: 1rem;
    padding: 0.5rem;
    color: blue;
    ::placeholder {
        color: red;
    }

`;


export const InputEmail = styled.input.attrs({
    type:'email',
    placeholder:"johnsmit@gmail.com"
})`
    font-size: 1rem;
    margin: 1rem;
    padding: 0.5rem;
    color: blue;
    ::placeholder {
        color: red;
    }
`

export const InputAwesome=styled.input.attrs({
    type:props => props.type  || "text", 
    placeholder : props => props.placeholder ||  "enter value"
})`
    font-size: 1rem;
    margin: 1rem;
    padding: 0.5rem;
    color: blue;
    ::placeholder {
        color: red;
    }

`