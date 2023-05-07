import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService  {
    constructor(private angularFireAuth: AngularFireAuth) { 
        this.userData = angularFireAuth.authState;
    }
    

    signUp(email: string, password: string) {
        this.angularFireAuth.auth()
        .createUserWithEmailWithPassword(email, password)
        .then(res => {
            console.log('You are Successfully');
        })
        .catch(err => {
            console.log('Something is wrong:', error.message);
        })

    }


    siginIn() {

        this.angularFireAuth.auth
        .signInWithEmailAndPassword(email,password)
        .then(res => {
            console.log('You are Sucessfully loggedIn');
        })
        .catch(err => {
           console.log('Something is wrong:', err.message) 
        })
    }


    
    SignOut() {
        this.angularFireAuth.auth
        .signOut()
    }
 }