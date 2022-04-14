import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input, OnInit, Optional, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MemberDetailsComponent } from '../member-details/member-details.component';
import { SharedServiceService } from '../shared/shared-service.service';
@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {
  @Input() message: any;
  buttonName= 'Add'
  constructor(private http: HttpClient, private router: Router, private s: SharedServiceService) { }
  type = [
    { key: 'Student', value: 'Student' },
    { key: 'Employee', value: 'Employee' }]
  ngOnInit(): void {
    this.renewMembership()
    
  }
  renewMembership(){
    if(this.s.getMessage()){
      this.AddmemberForm.setValue(this.s.getMessage());
      this.buttonName='Update'
      this.s.setMessage('') 
    }
    else{
      this.buttonName='Add'
      this.AddmemberForm
    }
  }
  AddmemberForm = new FormGroup({
    id: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    type: new FormControl(''),
    phone: new FormControl(''),
    homemail: new FormControl(''),
    campusmail: new FormControl(''),
    generatedate: new FormControl(''),
    noticedate: new FormControl(''),
    enddate: new FormControl(''),
    employeeid: new FormControl('')
  })
  onsubmit() {
    if(this.buttonName=='Add'){
    this.http.post(environment.apiUrl + 'addMember', this.AddmemberForm.value).subscribe(response => {
      if (JSON.parse(JSON.stringify(response)).status = '200')
        this.router.navigateByUrl('/member')

    })
  }else{
    this.http.post(environment.apiUrl + 'updateMember', this.AddmemberForm.value).subscribe(response => {
      // if (JSON.parse(JSON.stringify(response)).status = '200')
        window.location.reload();

    })
  }
  }
}
