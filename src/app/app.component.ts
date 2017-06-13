import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service'
import { Http, Response } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent implements OnInit {

  Data;

  constructor(private service: StudentService) { }

  ngOnInit() {
    this.service.getProjects("").subscribe(res => this.Data = res);
  }
  onKey(event) {
    this.service.getProjects(<HTMLInputElement>event.target.value).subscribe(res => this.Data = res);
  }
  onClick(data) {
    this.service.getProjects(data.value).subscribe(res => this.Data = res);
  }
}
