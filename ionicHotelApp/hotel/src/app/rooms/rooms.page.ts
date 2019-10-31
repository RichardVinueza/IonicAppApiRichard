import { Component, OnInit } from '@angular/core';
import { ApiService, rooms } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {

  roomArray: Array<rooms> = [];
  room: rooms;
  idRoom: number;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.getAllRooms();
    this.idRoom = null;
  }

  goToHome() {
    this.router.navigate(["/home"]);
  }

  goToPostRoom() {
    this.router.navigate(["/postroom"]);
  }

  goToUpdateRoom() {
    this.router.navigate(["/updateroom"]);
  }


  getAllRooms() {
    this.api.getAllRooms().subscribe((res: Array<rooms>) => {
      this.roomArray = res;

    })
  }

  getOneRoom() {
    this.api.getOneRoom(this.idRoom).subscribe((res: rooms) => {
      this.room = res;
      this.router.navigate(['/oneroom'], { queryParams: this.room });
    });
  }

  deleteRoom() {
    this.api.deleteOneRoom(this.idRoom).subscribe((res) => {
      this.getAllRooms();
      this.idRoom = null;
    })

  }




}
