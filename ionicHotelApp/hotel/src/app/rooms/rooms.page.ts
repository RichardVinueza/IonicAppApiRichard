import { Component, OnInit } from '@angular/core';
import { ApiService, rooms } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {

  roomArray : Array<rooms> = [];
  room : rooms;
  idRoom : number;
  constructor(private api : ApiService, private router : Router) { }

  ngOnInit() {
    this.getAllRooms();
  }

  goToHome(){
    this.router.navigate(["/home"]);
  }

  goToPostRoom(){
    this.router.navigate(["/postroom"]);
  }

  goToUpdateRoom(){
    this.router.navigate(["/updateroom"]);
  }


  getAllRooms(){
    this.api.getAllRooms().subscribe((res:Array<rooms>) => {
      this.roomArray = res;

    })
  }

  getOneRoom(){
    this.idRoom = Number.parseInt((document.getElementById("idRoom") as HTMLInputElement).value);
    this.api.getOneRoom(this.idRoom).subscribe((res : rooms)=>{
      this.room = res;
      this.router.navigate(['/oneroom'] , {queryParams: this.room});
    });
  }

  deleteRoom(){
    this.idRoom = Number.parseInt((document.getElementById("idRoom") as HTMLInputElement).value);
    this.api.deleteOneRoom(this.idRoom).subscribe((res) => {

    })

  }


}
