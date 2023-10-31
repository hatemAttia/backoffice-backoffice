import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ConferencesService } from '../services/conferences.service';
import { ToastrService } from 'ngx-toastr';
import {MatDialogRef,MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-edit-add-conference',
  templateUrl: './edit-add-conference.component.html',
  styleUrls: ['./edit-add-conference.component.scss'],
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
export class EditAddConferenceComponent implements OnInit {

  conferenceForm!: FormGroup;
  todayDate = new Date();
  constructor(private _fb:FormBuilder,
    public _dialog: MatDialogRef<EditAddConferenceComponent>,
    public matDialog: MatDialog, 
    private _confService : ConferencesService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
    
    this.conferenceForm = this._fb.group({
      title: ['',Validators.required],
      description:['',Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required],
      // isActive:['',Validators.required],
      // organizerId:['1']
    })
  }

  sdate = new FormControl(new Date());
 // date  ?=new FormControl(new Date((this.conferenceForm.value.startDate)));
  
  
  serializedDate = new FormControl(new Date().toISOString());

  ngOnInit(): void {
    this.conferenceForm.patchValue(this.data)
  }

submitConference(){
  if (this.conferenceForm.valid) {

   if (this.data) {

    this._confService.updateConference(this.data.id,this.conferenceForm.value).subscribe({
      next: (val :any) =>{
      this.toastr.success("Conference updated!","Success")
      this._dialog.close(true);
    },error:(err :any) => {
      console.error(err)
      this.toastr.error(err)
    }}
    )
    
   } else {

    this._confService.creatConference(this.conferenceForm.value).subscribe({
      next: (val :any) =>{
      this.toastr.success("Conference created succesfully","Success")
      this._dialog.close(true);
    },error:(err :any) => {
      console.error(err)
      this.toastr.error(err)
    }}
    )
    
   }
  }

  
}


}
