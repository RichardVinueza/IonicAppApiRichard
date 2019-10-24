import { Component, HostListener } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userNick : string;
  password :string;

  constructor(private router: Router) { }

  ngOnInit() {
  }
 
  goToRooms(){

    if(this.userNick == "Richard" && this.password == "admin1234" ){
      this.router.navigate(['/rooms']);
    }
    
  }
    
   
  

}
