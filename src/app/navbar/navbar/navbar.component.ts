import { AppComponent, UserDocument } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthComponent } from './../../tools/auth/auth.component';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router } from '@angular/router';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  auth = new FirebaseTSAuth();
  fireStore = new FirebaseTSFirestore();
  userHasProfile = true;
  userDocument: UserDocument;
  constructor( private loginSheet:MatBottomSheet , private router: Router ) {
  }

  onLogoutClick(){
    this.auth.signOut();
    this.router.navigate([""]);
  }

  loggedIn(){
    return this.auth.isSignedIn();
  }

  ngOnInit(): void {
  }
  onLoginClick(){
    this.loginSheet.open(AuthComponent)
  }

}
