import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private base_url="http://localhost:3000/users";
  private headers=new HttpHeaders({'Content-Type':'application/json'});

  constructor(private myClient:HttpClient) {

  }
  public GetAllUsers() {
    return this.myClient.get(this.base_url);

  }
  public GetUserById(id:any) {
    return this.myClient.get(this.base_url+"/"+id);

  }
  public addNewUser(user:any) {
    return this.myClient.post(this.base_url,user,{headers: this.headers} ).subscribe();

  }
  public updateUser(user:any) {
    return this.myClient.put(this.base_url+"/"+user.id,user,{headers: this.headers} ).subscribe();

  }
  public deleteUser(user:any) {
    return this.myClient.delete(this.base_url+"/"+user.id,{headers: this.headers} ).subscribe();
  }

}
