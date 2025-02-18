import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  constructor(private apiService: ApiService) {}

  submitFeedback(userId: string, feedback: string): void {
    this.apiService.provideFeedback(userId, feedback).subscribe();
  }
}