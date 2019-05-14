import React from 'react';
import "./Heading.css";
import { directive } from '@babel/types';
import {ButtonWrapper} from './Button';

export default function Heading() {
  return (
    <div>
      <h1 className="third">I'm separate CSS file</h1>
      <ButtonWrapper>I'm from Heading</ButtonWrapper>
    </div>
  )
}
