import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'lazy-parent',
  templateUrl: './lazy-parent.component.html',
  styleUrls: ['./lazy-parent.component.css']
})
export class LazyParentComponent implements OnInit {
  userform: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.userform = this.fb.group(controlsconfig:{
    //   'Name': ['',Validators.required]
    // });
  }

  ngOnInit() {
  }

}
