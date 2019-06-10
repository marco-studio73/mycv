import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  uri = 'http://localhost:3000/skills';

  constructor(private http: HttpClient) { }

  getSkills() {
    return this
           .http
           .get(`${this.uri}`);
  }

  postSkill(skill: any) {
    return this.http.post(`${this.uri}`, skill);
  }

  deleteSkill(id) {
    return this
              .http
              .delete(`${this.uri}/${id}`);
  }

  updateskill(id, skill){
    return this.http.post(`/update/${id}`, skill);
  }
}