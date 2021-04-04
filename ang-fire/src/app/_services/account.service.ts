import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '@app/_models';
import { AngularFireAuth } from  "@angular/fire/auth";
import firebase from 'firebase/app';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    private result: any;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private http: HttpClient,
        public  afAuth:  AngularFireAuth
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    async login(email, password) {
        this.result = await this.afAuth.signInWithEmailAndPassword(email, password);
        var mes = this.result.message;
        console.log(this.result)
        if(this.result.message){
            console.error(this.result.message)
        } else{
            localStorage.setItem('user', JSON.stringify({'mail':email, 'pass': password}));
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigateByUrl(returnUrl);
        }
        
    }

    async loginWithGoogle(){
        this.result = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        console.log(this.result)
        if(this.result.message){
            console.error(this.result.message)
        } else{
            localStorage.setItem('user', JSON.stringify({'mail':this.result.user.email, 'pass': 'loginWithGoogle'}));
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigateByUrl(returnUrl);
        }
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    async register(email, password) {
        var result = await this.afAuth.createUserWithEmailAndPassword(email, password);
        console.log(result)
        if(this.result.message){
            console.error(this.result.message)
        } else{
            this.router.navigate(['/account/login']);
        }
    }
}