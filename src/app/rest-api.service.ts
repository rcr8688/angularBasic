import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.stage'
@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(public httpClient: HttpClient) { }
  baseUrl: any
  getUserDetails(userId: number) {
    console.log(environment.ApiUrl, "stage");

    this.baseUrl = `https://reqres.in/api/users/${userId}`
    return this.httpClient.get(this.baseUrl)
  }

  getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(res => {
          resolve({ lat: res.coords.latitude, lon: res.coords.longitude })
        }, err => {
          reject(err);
        })
      }
    })
  }

}



