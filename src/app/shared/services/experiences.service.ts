import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  uri = 'http://localhost:3000/experiences';

  constructor(private http: HttpClient) { }

  getAllExperiences() {
    return this
           .http
           .get(`${this.uri}`);
  }

  postExperience(experience: any) {
    return this.http.post(`${this.uri}`, experience);
  }

  deleteExperience(id) {
    return this
              .http
              .delete(`${this.uri}/${id}`);
  }

  updateExperience(id, experience) {
    console.log(id, experience);
    return this.http.post(`${this.uri}/update/${id}`, experience);
  }

}
