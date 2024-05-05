import { Component } from '@angular/core';
import { List } from '../list';
import { NgFor } from '@angular/common';
import { ListerService } from '../lister.service';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {
  lists:List[]=[];
  constructor(private lister:ListerService){
  }
  getLists(): void {
    this.lists=this.lister.getList();
  }
  ngOnInit():void{
    this.getLists();
  }
  
}
