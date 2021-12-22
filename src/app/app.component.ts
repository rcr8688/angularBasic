import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { from } from 'rxjs';
import { concatMap, switchMap, tap } from 'rxjs/operators'
import { RestApiService } from './rest-api.service';
import { Increment, Decrement, Reset } from './createActions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CRM';
  student: any = { name: "" }
  userIds: any[] = [1, 2, 3, 4, 5]
  Response: any[] = []
  count: any
  cordts: any
  constructor(public restApiService: RestApiService, public store: Store<{ count: any }>) {
    this.count = store.select('count')
    restApiService.getLocation().then(res => {
      this.cordts = res
    })
  }
  ngOnInit() {
    from(this.userIds).pipe(
      concatMap(res => this.restApiService.getUserDetails(res))).subscribe(response => {
        console.log(response);
        this.Response.push(response)
        console.log(this.Response, "testuing");
      })

  }
  OnSubmit() {
    this.student = { name: this.student.name }
  }

  increment() {
    this.store.dispatch(Increment())
  }

  Decrement() {
    this.store.dispatch(Decrement())
  }

  reset() {
    this.store.dispatch(Reset())
  }
}
