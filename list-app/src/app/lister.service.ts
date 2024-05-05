import { Injectable } from '@angular/core';
import { List } from './list';

@Injectable({
  providedIn: 'root'
})
export class ListerService {

  constructor() { }
  getList():List[]{
    let lists:List[]=[
      {
      id:1,
      name:"test",
      description:"more test"
    },
    {
      id:2,
      name:"test",
      description:"more test"
    },
    {
      id:3,
      name:"test",
      description:"more test"
    },
    {
      id:4,
      name:"test",
      description:"more test"
    },
    {
      id:5,
      name:"test",
      description:"more test"
    },
  ];
  return lists;
  }
}
