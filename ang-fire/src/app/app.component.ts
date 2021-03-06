import {Component} from '@angular/core';
import { AccountService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html'})
export class AppComponent {
    user: User;
    username = '';

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
        this.username = this.accountService.userValue ? this.accountService.userValue.mail : '';
    }

    logout() {
        this.accountService.logout();
    }
}