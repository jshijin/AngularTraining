import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName = ''
  buttonEnable = false;
  constructor() { }
  
  checkUserNameEmpty(){
   this.buttonEnable = this.userName == '' ? false : true;
  }

   emptyUserName()
   {
    this.userName = '';
    this.buttonEnable = false;
   }

  ngOnInit() {
  }

}
