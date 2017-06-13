import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class StudentService {

  constructor(private http: Http) {
  }

  extractData(res: Response) {
    return res.json();
  }

  getProjects(text) {
    return this.http.get("http://localhost:57454/User/Search/" + text).map(this.extractData)
  }

}
