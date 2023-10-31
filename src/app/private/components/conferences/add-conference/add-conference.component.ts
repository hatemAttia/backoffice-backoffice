import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ConferencesService } from '../services/conferences.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-conference',
  templateUrl: './add-conference.component.html',
  styleUrls: ['./add-conference.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AddConferenceComponent implements OnInit {
  conferenceForm!: FormGroup;
  todayDate = new Date();

  constructor(private _fb:FormBuilder, 
    private _confService : ConferencesService,
    private toastr: ToastrService,private router: Router) 
    {
      this.conferenceForm = this._fb.group({
        title: ['',Validators.required],
        description:['',Validators.required],
        startDate:['',Validators.required],
        endDate:['',Validators.required],
        // isActive:['',Validators.required],
        organizerId:sessionStorage.getItem('UserId')
      }) 
    }

  ngOnInit(): void {
  }

  submitConference(){
    if (this.conferenceForm.valid) {
      this._confService.creatConference(this.conferenceForm.value).subscribe({
        next: (val :any) =>{
          this.router.navigate(['/conferences'])
        this.toastr.success("Conference created succesfully","Success")
      },error:(err :any) => {
        console.error(err)
        this.toastr.error(err)
      }}
      )
      
     }
    
  }

}
