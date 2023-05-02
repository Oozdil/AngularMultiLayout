import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standart-user',
  templateUrl: './standart-user.component.html',
  styleUrls: ['./standart-user.component.css']
})
export class StandartUserComponent implements OnInit {
  dataSource="";
  isLoggedIn=false;
  ngOnInit(): void {
    
  }

  Login() {
    localStorage.setItem('dataSource', "test data");
    this.dataSource=(localStorage.getItem("dataSource"));
    this.isLoggedIn=true;
  }
}
