import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class StudentService {
  Result;
  constructor(private http: Http) {
  }

  extractData(res: Response) {
    return res.json();
  }

  getData(text) {
    return this.http.get("http://localhost:57454/User/Search/" + text).map(this.extractData)
  }

  InsertData(DetailUser) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(DetailUser);
    return this.http.post("http://localhost:57454/User/Insert/", body, options)
  }

  UpdateData(DetailUser) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(DetailUser);
    return this.http.put("http://localhost:57454/User/Update/", body, options)
  }

  DeleteData(id) {
    return this.http.delete("http://localhost:57454/User/Delete/" + id)
  }

}
