import { Component, OnInit } from '@angular/core';
import {addDoc,Firestore} from '@angular/fire/firestore'
import { collection } from '@firebase/firestore';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.css']
})
export class AdddetailsComponent implements OnInit {

  constructor(public fire:Firestore) { }
  //Function to add details, and save them to the database.
  addData = (value:any) =>{
    const dbInstance = collection(this.fire,'details');
    addDoc(dbInstance,value)
    .then(()=>{
      alert("Data added to database!");
    })
    .catch((err)=>{
      console.log(err.message);
      alert("Data could not be added!");
    })
  }


  ngOnInit(): void {
  }

}
