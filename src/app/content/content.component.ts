import { Component, OnInit, Injectable } from '@angular/core';
import { StudentService } from 'app/student.service'
declare function DangerDialogOpen(text): any;
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [StudentService]
})
export class ContentComponent implements OnInit {
  Data;
  DetailUser;
  constructor(private service: StudentService) {
    this.DetailUser = new DetailUser('', '', '');
  }

  ngOnInit() {
    this.service.getData("").subscribe(res => {
      this.Data = res;
      if (this.Data.length == 0) {
        DangerDialogOpen('Data not found')
      }
    });
  }
  onKey(event) {
    this.service.getData(<HTMLInputElement>event.target.value).subscribe(res => this.Data = res);
  }
  onClick(data) {
    this.service.getData(data.value).subscribe(res => {
      this.Data = res
      if (this.Data.length == 0) {
        DangerDialogOpen('Data not found')
      }
    });
  }
  onInsertClick() {
    if (this.DetailUser.Firstname == '' || this.DetailUser.Lastname == '') {
      DangerDialogOpen('Please Input Firstname and Lastname');
    }
    else {
      this.service.InsertData(this.DetailUser).subscribe(res => { this.service.getData("").subscribe(res => this.Data = res) });
      this.DetailUser.Firstname = '';
      this.DetailUser.Lastname = '';
    }
  }
  onDeleteClick() {
    this.service.DeleteData(this.DetailUser.ID).subscribe(res => { this.service.getData("").subscribe(res => this.Data = res); })
    this.DetailUser.Firstname = '';
    this.DetailUser.Lastname = '';
  }
  onRowClick(data, btn) {
    this.DetailUser.Firstname = data.Firstname;
    this.DetailUser.Lastname = data.Lastname;
    btn.disabled = "false"

  }
}

export class DetailUser {
  constructor(public ID, public Firstname, public Lastname) { }
}
