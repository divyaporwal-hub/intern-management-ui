import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { intern } from '../models/interns.model';

@Injectable({
  providedIn: 'root'
})
export class InternsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private: http: HttpClient) { }
  
  getAllInterns(): Observable<interns[]>
  {
      return this.http.get<interns[]>(this.baseApiUrl+'/api/interns')

  }
}
