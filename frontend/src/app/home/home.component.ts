import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { v4 as uuidv4 } from 'uuid'; // Import UUID (if using uuid)
import { Nl2brPipe } from '../nl2br.pipe'; // Import the custom pipe
import { ReplaceSymbolsPipe } from '../replaceSymbols.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, Nl2brPipe, ReplaceSymbolsPipe], // Import necessary modules
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  preferences: any = {
    goal: '',
    preference: ''
  };
  feedback: string = '';
  recommendations: string = ''; // Variable to store recommendations
  userId: string = ''; // Automatically assigned user ID
  

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Automatically generate a unique user ID
    this.userId = uuidv4(); // Using UUID
    // Alternatively, use a timestamp-based ID:
    // this.userId = `user_${Date.now()}`;
    console.log('Assigned User ID:', this.userId);
  }

  // Function to handle form submission
  submitPreferences(event: Event): void {
    event.preventDefault();

    // Send preferences to the backend
    this.apiService.logData(this.userId, 'preferences', this.preferences).subscribe(() => {
      console.log('Preferences saved!');
      
      // Fetch recommendations
      this.fetchRecommendations();
    });
  }

  // Function to fetch recommendations
  fetchRecommendations(): void {
    this.apiService.getRecommendations(this.userId).subscribe((data: any) => {
      this.recommendations = data.recommendations; // Store recommendations
    });
  }
  
  // Function to handle feedback submission
  submitFeedback(event: Event): void {
    event.preventDefault();

    // Send feedback to the backend
    this.apiService.provideFeedback(this.userId, this.feedback).subscribe(() => {
      console.log('Feedback submitted!');
      
      // Regenerate recommendations based on feedback
      this.fetchRecommendations();
    });
  }

  // // Function to preprocess recommendations
  // preprocessRecommendations(recommendations: string): string {
  //   if (!recommendations) return recommendations;

  //   // Remove unwanted symbols (e.g., *, #)
  //   recommendations = recommendations.replace(/\*/g, '').replace(/#/g, '');

  //   // Add additional formatting if needed
  //   // Example: Replace "##" with "<h2>" and "**" with "<strong>"
  //   recommendations = recommendations
  //     .replace(/##\s*(.*?)\s*##/g, '<h2>$1</h2>') // Replace ## with <h2>
  //     .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Replace ** with <strong>

  //   return recommendations;
  // }
}