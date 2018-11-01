import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { Email } from './email.model';

@Injectable({providedIn:'root'})
export class EmailService {
    constructor(private http:HttpClient){}

    public sendEmailToBackend(email:Email){
        console.log(email);
        return this.http.post('http://localhost:3000/api/mail',email,{headers:{'content-type': 'application/json'}}).toPromise();
    }
}