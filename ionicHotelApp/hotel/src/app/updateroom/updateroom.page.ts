import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, rooms } from '../api.service';

@Component({
  selector: 'app-updateroom',
  templateUrl: './updateroom.page.html',
  styleUrls: ['./updateroom.page.scss'],
})
export class UpdateroomPage implements OnInit {

  dataToPut: rooms;
  putIdRoom: number;
  putNumberRoom: number;
  putPriceRoom: number;
  putStateRoom: string;

  constructor(private router: Router, private api: ApiService) { }



  ngOnInit() {
  }

  goToRoomsFromUpdateRoom() {
    this.router.navigate(["/rooms"]);
  }

  putOneRoom() {
    this.putIdRoom = Number.parseInt((document.getElementById("putIdRoom") as HTMLInputElement).value);
    this.putNumberRoom = Number.parseInt((document.getElementById("putNumberRoom") as HTMLInputElement).value);
    this.putPriceRoom = Number.parseInt((document.getElementById("putPriceRoom") as HTMLInputElement).value);
    this.putStateRoom = (document.getElementById("putStateRoom") as HTMLInputElement).value;

    this.dataToPut = {
      id: this.putIdRoom,
      numberRoom: this.putNumberRoom,
      price: this.putPriceRoom,
      state: this.putStateRoom

    }
    

    this.api.updateOneRoom(this.dataToPut).subscribe(() => { 
      

    })

    
    

  }

}


