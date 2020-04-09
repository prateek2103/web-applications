import { Injectable } from '@angular/core';
import {Contact} from './contact-list';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = 'http://localhost:3000/home';

  constructor(private http: HttpClient) {}
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url);
  }

  addcontact(contact): Observable<Contact> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    this.getContacts();
    return this.http.post<Contact>('http://localhost:3000/home/add', contact, {headers});
  }

  deleteContact(id: any): Observable<Contact> {
    return this.http.get<Contact>(this.url + '/delete/' + id);
  }


}
