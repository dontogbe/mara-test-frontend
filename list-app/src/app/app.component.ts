import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ListsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My List App';
}
