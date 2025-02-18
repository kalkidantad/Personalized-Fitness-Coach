import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  // Function to fetch recommendations
 
  getRecommendations(userId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/recommendations`, { user_id: userId });
  }

  // Function to log user data

  logData(userId: string, type: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/log`, { user_id: userId, type, data });
  }

  // Function to provide feedback

  provideFeedback(userId: string, feedback: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/feedback`, { user_id: userId, feedback });
  }
}