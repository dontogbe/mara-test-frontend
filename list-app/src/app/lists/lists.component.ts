import { Component } from '@angular/core';
import { List } from '../list';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {
  lists:List[]=[
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
}
