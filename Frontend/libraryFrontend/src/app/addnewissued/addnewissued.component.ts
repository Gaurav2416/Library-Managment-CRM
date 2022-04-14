import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-addnewissued',
  templateUrl: './addnewissued.component.html',
  styleUrls: ['./addnewissued.component.css']
})
export class AddnewissuedComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  AddIssuedForm = new FormGroup({
    staffid: new FormControl(),
    bookid: new FormControl(),
    visitorid: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    noofbook: new FormControl(),
    issuedate: new FormControl(),
    NoticeDate: new FormControl(),
    EndDate: new FormControl()
  })
  onsubmit() {
    this.http.post(environment.apiUrl + 'addIssuedBook', this.AddIssuedForm.value).subscribe(response => {
      if (JSON.parse(JSON.stringify(response)).status = '200')
        this.router.navigateByUrl('/isseudBook')

    })
  }
}
