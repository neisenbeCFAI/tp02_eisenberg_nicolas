import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {RecapData} from "../form-group-registration/form-group-registration.component";

@Component({
  selector: 'app-recap-form',
  templateUrl: './recap-form.component.html',
  styleUrls: ['./recap-form.component.css']
})
export class RecapFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: RecapData) { }

  ngOnInit(): void {
  }

}
