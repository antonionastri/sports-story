import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root, Team } from '../model/sport-detail';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t="

  constructor(private http: HttpClient) { }

  getTeam(name:string): Observable<Root> {
    const word = this.baseUrl + name;
    return this.http.get<Root>(word); 
  }

}
