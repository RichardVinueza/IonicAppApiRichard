import { Component, OnInit } from '@angular/core';
import { ApiService, rooms } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oneroom',
  templateUrl: './oneroom.page.html',
  styleUrls: ['./oneroom.page.scss'],
})
export class OneroomPage implements OnInit {

  room : rooms;

  constructor(private router : ActivatedRoute, private backToRooms : Router) { }

  ngOnInit() {
    this.router.queryParams.subscribe((params : rooms) => {
      this.room = params;
    });
  }

  goToRoomsFromOneRoom(){
    this.backToRooms.navigate(["/rooms"]);
  }



  
  

}

