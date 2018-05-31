import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {MatDialog} from "@angular/material";
import { ErrorDialogComponent} from '../error-dialog/error-dialog.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router : Router, public dialog : MatDialog) {
  }

  username : string
  password : string

  login() : void {
    if(this.username == 'admin' && this.password == 'admin')
    {
      this.router.navigate(['/user']);
    }
    else {
      // alert("Invalid credentials");
      this.showError("Invalid credentials");
    }
  }

  showError(error : string) : void {

    let dialogRef = this.dialog.open(ErrorDialogComponent, {
      data: {errorMsg: error} ,width : '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
    });

  }
}
