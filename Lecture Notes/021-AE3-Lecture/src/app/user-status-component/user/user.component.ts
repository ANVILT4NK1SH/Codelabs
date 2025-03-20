import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [NgStyle],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  status = input<string | unknown>()
  

  setColor (s:string | unknown) {
    if (s === 'active') {
     const bgroundColor = 'green'      
     return bgroundColor
    } else if (s === 'inactive') {
      const bgroundColor = 'lightgrey'
      return bgroundColor
    } else if (s === 'banned'){
      const bgroundColor = 'red'
      return bgroundColor
    }  else{
      const bgroundColor = 'white'
      return bgroundColor
    }
  }
}
