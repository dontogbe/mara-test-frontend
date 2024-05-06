import { Component } from '@angular/core';
import { Item} from '../list';
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
  list:Item[]=[];
  constructor(private lister:ListerService){
  }
  getLists(): void {
    this.lister.getList().subscribe(
      list => this.list = list
    );
  }
  add(name: string):void{
    name=name.trim();
    if (!name){return;}
    let item:Item={name:name,description:'',id:0};
    this.lister.addItem(item)
    .subscribe(item =>{this.list.push(item)})
  }
  ngOnInit():void{
    this.getLists();
  }
  
}
