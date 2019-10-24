import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, rooms } from '../api.service';
import { RoomsPage } from '../rooms/rooms.page';

@Component({
  selector: 'app-postroom',
  templateUrl: './postroom.page.html',
  styleUrls: ['./postroom.page.scss'],
})
export class PostroomPage implements OnInit {

  dataToPost : rooms;
  postNumberRoom : number;
  postPriceRoom : number;
  postStateRoom : string;

  constructor(private router : Router, private api : ApiService) { }

  ngOnInit() {
  }

  goToRoomsFromPostRoom(){
    this.router.navigate(["/rooms"]);
  }

  postOneRoom(){   
    this.dataToPost = {
      id : 0,
      numberRoom : this.postNumberRoom,
      price : this.postPriceRoom,
      state : this.postStateRoom
    }
    
    this.api.postOneRoom(this.dataToPost).subscribe((res) => {})

    
    

  }

}
