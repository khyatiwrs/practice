import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  clsName = 'two';
  clsName2='three';

  success_msg = true;
  success_msge=false;

  name=['khyati','bhavin','hemal','harshil'];

  contacts=[
    {
      'firstName': 'khyati',
      'lastName': 'patel',
      'age': 22
    },
    {
      'firstName': 'bhavin',
      'lastName': 'patel',
      'age': 23
    },
    {
      'firstName': 'hemal',
      'lastName': 'patel',
      'age': 23
    }
  ]

   header=['id','name','lname','age'];

  rows=[
    {
      'id': '1',
      'name': 'khyati',
      'lname': 'patel',
      'age': 22
    },
    {
      'id':'2',
      'name': 'bhavin',
      'lname': 'patel',
      'age': 23
    },
    {
      'id':'3',
      'name': 'hemal',
      'lname': 'patel',
      'age': 23
    }
  ]
}
