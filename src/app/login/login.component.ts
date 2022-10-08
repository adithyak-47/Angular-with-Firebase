import { Component, OnInit } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth:Auth, public router:Router) { }
  //The below variables store the values entered in the respective fields.
  email="";
  password="";
  //Function to authenticate registration, and then perform actions based on the result.
  handleregister = (email:any, password:any) =>{
    createUserWithEmailAndPassword(this.auth,email,password)
    .then((response:any)=>{
      console.log(response.user);
      this.router.navigate(['/add']);
    })
    .catch((err:any)=>{
      alert("This email is already in use! Please login to continue");
    })
  }
  //Function to authenticate login, and then to perform actions based on the result.
  handlelogin = (email:any, password:any) =>{
    signInWithEmailAndPassword(this.auth, email, password)
    .then((response)=>{
      console.log(response.user)
      this.router.navigate(['/add']);
    })
    .catch((err:any)=>{
      alert("Invalid login! Please ensure that the details are correct or that you are registered.");
    })
  }

  ngOnInit(): void {
  }

}
