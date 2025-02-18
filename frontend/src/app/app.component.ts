import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet], // Import RouterOutlet
  // imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet> <!-- Use router-outlet for routing -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fitness-coach-ai';
}
