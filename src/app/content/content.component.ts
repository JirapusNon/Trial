import { Component, OnInit } from '@angular/core';
import { StudentService } from 'app/student.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [StudentService]
})

export class ContentComponent implements OnInit {
  Data;
  Firstname;
  Lastname;

  constructor(private service: StudentService) { }

  ngOnInit() {
    this.service.getData("").subscribe(res => this.Data = res);
  }
  onKey(event) {
    this.service.getData(<HTMLInputElement>event.target.value).subscribe(res => this.Data = res);
  }
  onClick(data) {
    this.service.getData(data.value).subscribe(res => this.Data = res);
  }
  onInsertClick() {
    this.service.InsertData(this.Firstname, this.Lastname).subscribe();
  }


}
