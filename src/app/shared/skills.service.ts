import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  getSkills() {
    return this
           .http
           .get('');
  }

  postSkill(skill) {
    return this.http.post('', skill);
  }

  deleteskill(id) {
    return this
              .http
              .delete(`/${id}`);
  }

  updateskill(id, skill){
    return this.http.post(`/update/${id}`, skill);
  }
}