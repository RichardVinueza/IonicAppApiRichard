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
    this.router.navigate(['/rooms']);
  }
 
  goToRooms(){
    
    if(this.userNick == "" && this.password == "" ){
      this.router.navigate(['/rooms']);
    }
    
  }
    
   
  

}
