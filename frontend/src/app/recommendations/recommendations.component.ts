import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule, RouterModule], // Import necessary modules
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  recommendations: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    const userId = 'user123'; // Replace with dynamic user ID
    this.apiService.getRecommendations(userId).subscribe((data: any) => {
      this.recommendations = data.recommendations;
    });
  }
}