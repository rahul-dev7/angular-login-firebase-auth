import { Injectable } from '@angular/core';


@Injectable()
export class AuthenticationService  {
    constructor(private angularFireAuth: AngularFireAuth) { 

        this.userData = angularFireAuth.authState
    }
    
}