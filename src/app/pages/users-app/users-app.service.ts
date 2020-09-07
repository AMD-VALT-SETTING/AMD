import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { UsersApp } from './model/userApp';
import { UserAppRequest } from './model/userAppRequest';
import { AppConstants } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class UsersAppService {
  userError: any;

  constructor(private httpClient: HttpClient) { }

  getUserApp(userAppRequest: UserAppRequest): Observable<UsersApp[]> {
    return this.httpClient.post<UsersApp[]>(`${AppConstants.SERVICES_BASE_URL}/rest/manage/search`, userAppRequest);
  }

  disableUser(user: UsersApp) {
    return this.httpClient.put<UsersApp[]>(`${AppConstants.SERVICES_BASE_URL}/rest/manage/update`, user);
  }

  enableUser(user: UsersApp) {
    return this.httpClient.put<UsersApp[]>(`${AppConstants.SERVICES_BASE_URL}/rest/manage/update`, user);
  }

  resetPassword(user: UsersApp) {
    return this.httpClient.put<UsersApp[]>(`${AppConstants.SERVICES_BASE_URL}/rest/manage/update`, user);
  }

  private handleError(error: HttpErrorResponse) {
    this.userError = error;
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned error: ${JSON.stringify(error)}`);
    }

    return throwError(error);
  }
}
