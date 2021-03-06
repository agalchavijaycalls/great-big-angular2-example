// Exact copy of app/title.component.ts except import UserService from shared
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { User } from '../store/user/user.model';
import * as fromRoot from '../store';

@Component({
    selector: 'app-title',
    templateUrl: 'title.component.html',
    styleUrls: ['../../../assets/styles/basscss.css']
})
export class TitleComponent {
    @Input() subtitle = '';
    title = 'Combined Angular 2 + ngrx Demo App';
    user$: Observable<User>;

    constructor(private store: Store<fromRoot.RootState>) { }

    ngOnInit() {
        this.user$ = this.store.select(fromRoot.getUserState);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
