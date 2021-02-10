import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { apiUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IMenu } from '../../shared/models/menu'

apiUrl
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  baseUrl = apiUrl;
  constructor(private http: HttpClient) { }

  getMenu(): Observable<IMenu[]> {
    return this.http.get<IMenu[]>(this.baseUrl);
  }


}
