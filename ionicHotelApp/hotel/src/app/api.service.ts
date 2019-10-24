import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from  '@angular/common/http';
import { Params } from '@angular/router';

export class rooms {
   id : number;
   numberRoom : number;
   price : number;
   state : string;

}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient){ 

  }

  getAllRooms(){
    return this.http.get("http://localhost:8080/api/gethotel");
  }

  getOneRoom(id:number){
    return this.http.get("http://localhost:8080/api/getOneHotel/" + id);
  }

  postOneRoom(dataToPost : any){
    console.log(dataToPost);
    return this.http.post("http://localhost:8080/api/posthotel",null, { params: dataToPost});
    
  }

  deleteOneRoom(id:number){
    return this.http.delete("http://localhost:8080/api/deletehotel/" + id);
    
  }

  updateOneRoom(dataToPut : any){
    return this.http.put("http://localhost:8080/api/updatehotel/" + dataToPut.id, null, {params: dataToPut});

  }




}


