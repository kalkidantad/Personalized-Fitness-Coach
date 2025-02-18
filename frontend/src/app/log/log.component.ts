import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  constructor(private apiService: ApiService) {}

  logWorkout(userId: string, workout: string): void {
    this.apiService.logData(userId, 'workout', workout).subscribe();
  }

  logMeal(userId: string, meal: string): void {
    this.apiService.logData(userId, 'meal', meal).subscribe();
  }
}