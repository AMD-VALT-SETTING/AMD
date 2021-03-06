import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'app/model/User';
import { PieChartData } from './model/PieChartData';
import { Allarms } from './model/Allarms';


const baseUrl = 'http://red.valtellina.com:65088';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  

  constructor(private httpClient: HttpClient) { }

  getDataForPieChart (): Observable<PieChartData[]> {
    return this.httpClient.get<PieChartData[]>(`${baseUrl}/rest/dashboard/pie`);
  }

  findUsersForLabelPieTable(selectedCategory: number): Observable<User[]> {
    
    return this.httpClient.post<User[]>(`${baseUrl}/rest/dashboard/detail`,selectedCategory);
  }
  getDataAllarms (): Observable<Allarms[]> {
    return this.httpClient.get<Allarms[]>(`${baseUrl}/rest/dashboard/allarms`);
  }
  
}

