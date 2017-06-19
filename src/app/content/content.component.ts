import { Component, OnInit, Injectable } from '@angular/core';
import { StudentService } from '../student.service';
declare function DangerDialogOpen(text): any;
declare function SuccessDialogOpen(text): any;
declare function onRowUpdateClick(): any;


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [StudentService]
})
export class ContentComponent implements OnInit {
  Data;
  DetailUser;
  selectedRow: Number;
  setClickedRow: Function;
  constructor(private service: StudentService) {
    this.DetailUser = new DetailUser('', '', '');

    this.setClickedRow = function (index) {
      this.selectedRow = index;
    }
  }
  ngOnInit() {
    this.service.getData("").subscribe(res => {
      this.Data = res
      if (this.Data.length == 0) {
        DangerDialogOpen('Data not found')
      }
    }, error => {
      if (error.status == 0) {
        DangerDialogOpen('Data not found or API server is down')
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
    }, error => {
      if (error.status == 0) {
        DangerDialogOpen('Data not found or API server is down')
      }
    });
  }
  onInsertClick() {
    if (this.DetailUser.Firstname == '' || this.DetailUser.Lastname == '') {
      DangerDialogOpen('Please Input Firstname and Lastname');
      this.selectedRow = -1;
    }
    else {
      this.service.InsertData(this.DetailUser).subscribe(res => {
        this.service.getData("").subscribe(res => this.Data = res);
        if (res.ok) {
          SuccessDialogOpen('Insert Completed.');
        }
      });
      this.DetailUser.Firstname = '';
      this.DetailUser.Lastname = '';
    }
  }

  onUpdateClick() {
    if (this.DetailUser.Firstname == '' || this.DetailUser.Lastname == '') {
      DangerDialogOpen('Please Input Firstname and Lastname');
      this.selectedRow = -1;
    } else {
      this.service.UpdateData(this.DetailUser).subscribe(res => {
        this.service.getData("").subscribe(res => this.Data = res);
        if (res.ok) {
          SuccessDialogOpen('Update Completed.');
        }
      });
      this.DetailUser.Firstname = '';
      this.DetailUser.Lastname = '';
      this.selectedRow = -1;

    }

  }
  onDeleteClick() {
    this.service.DeleteData(this.DetailUser.ID).subscribe(res => { this.service.getData("").subscribe(res => this.Data = res); })
    this.DetailUser.Firstname = '';
    this.DetailUser.Lastname = '';
  }
  onRowClick(data) {
    this.DetailUser.Firstname = data.Firstname;
    this.DetailUser.Lastname = data.Lastname;
    onRowUpdateClick()
  }
  onCancelClick() {
    this.DetailUser.Firstname = '';
    this.DetailUser.Lastname = '';
    this.selectedRow = -1;
  }
}

export class DetailUser {
  constructor(public ID, public Firstname, public Lastname) { }
}
