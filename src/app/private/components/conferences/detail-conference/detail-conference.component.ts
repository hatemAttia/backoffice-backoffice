import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConferencesService } from '../services/conferences.service';
import { Conference } from '../../context/DTO';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-detail-conference',
  templateUrl: './detail-conference.component.html',
  styleUrls: ['./detail-conference.component.scss'],
  
})
export class DetailConferenceComponent implements OnInit {

  deleteConfForm!: FormGroup;
  conferenceForm!: FormGroup;
  todayDate = new Date();
  conference: any ;
  conferenceId :any;

  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _confService : ConferencesService,
    private _toastrService:ToastrService,
    private toastr: ToastrService,
    private _fb:FormBuilder) {

      this.conferenceForm = new FormGroup({
        title: new FormControl(),
        description: new FormControl(),
        startDate: new FormControl(),
        endDate: new FormControl(),
        organizerId: new FormControl(sessionStorage.getItem('UserId'))
      });

     }

    ngOnInit(): void {
      this._activatedRoute.paramMap.subscribe((param) => {
        this.conferenceId = param.get('id');
      });
      this.getConference();
      this.deleteConfForm = this._fb.group({
        check: [false]
      });
    
      console.log(this.deleteConfForm.value.check);
    }


    getConference(){
      this._confService.getConferenceDetail(this.conferenceId).subscribe(
      (data) => {
        this.conference = data;
        console.log("this is conference details:", this.conference);
  
        // Now that you have received the data, patch the form values
        this.conferenceForm.patchValue(data);
      },
      (error) => {
        console.error("error fetching conference details:", error);
      }
    );
  }

  submitConference(){
    if (this.conferenceForm.valid) {
      this._confService.updateConference(this.conference.id,this.conferenceForm.value).subscribe({
        next: (val :any) =>{
        this.getConference();
        this.toastr.success("Conference updated!","Success")
      },error:(err :any) => {
        console.error(err)
        this.toastr.error(err)
      }}
      )
    }
  }

  deleteConference(id:number){  
    if (this.deleteConfForm.value.check) {    
    this._confService.deleteConference(id).subscribe({
      next:(response)=>{
        this._toastrService.success("Conference Deleted!","Success")
        this._router.navigate(['/allConferences'])
    },error: console.log,
    })

  }else{
    this._toastrService.error("Please check first!")
  }
}
}
