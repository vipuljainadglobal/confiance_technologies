import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl = environment.baseUrl
  constructor(private routingPage: Router, private http: HttpClient) { }

  get(url) {
    console.log(url , this.baseUrl + url)
    return this.http.get(this.baseUrl + url ,  { ...Option, responseType: 'text' })
  }

  post(url) {
    console.log(url)
    return this.http.post(this.baseUrl + url , '' , { ...Option, responseType: 'text' })
  }
}
