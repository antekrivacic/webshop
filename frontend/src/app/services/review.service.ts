import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../shared/models/Review';
import { REVIEW_BY_ID_URL, REVIEWS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  getReviews(): Observable<Review[]>{
    return this.http.get<Review[]>(REVIEWS_URL);
  }

  getReviewsByItemId(itemId: string): Observable<Review[]>{
    return this.http.get<Review[]>(REVIEW_BY_ID_URL + itemId);
  }
}
