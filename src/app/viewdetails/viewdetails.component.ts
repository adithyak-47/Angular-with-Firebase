import { Component, OnInit } from '@angular/core';
import {getDocs, Firestore} from '@angular/fire/firestore'
import { collection } from '@firebase/firestore';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

  constructor(public fire: Firestore) { 
    this.getData();
  }
  //An array that will be used to store retrieved data.
  public data:any = [];
//Function to retrieve information from the database.
getData = () =>{
  const dbInstance = collection(this.fire,'details');
  getDocs(dbInstance)
  .then((response)=>{
    this.data = [...response.docs.map((item)=>{
      return {...item.data(),id: item.id}
    })]
  })
}

  ngOnInit(): void {
  }

}
