import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router:Router) { }
//All of the below functions are used to navigate to different components.
  movetoadd = () =>{
    this.router.navigate(['/add']);
  }

  movetoview = () =>{
    this.router.navigate(['/view']);
  }

  movetologin =() =>{
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
