import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConferencesService } from '../services/conferences.service';
import { Conference } from '../context/DTO';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-detail-conference',
  templateUrl: './detail-conference.component.html',
  styleUrls: ['./detail-conference.component.scss']
})
export class DetailConferenceComponent implements OnInit {

  deleteConfForm!: FormGroup;
  conference: any ;
 conferenceId :any;

  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _confService : ConferencesService,
    private _toastrService:ToastrService,
    private router: Router,
    private _fb:FormBuilder) { }

  ngOnInit(): void {
   this.conferenceId =this._activatedRoute.snapshot.paramMap.get('id');
   this._confService.getConferenceDetail(this.conferenceId).subscribe(
    (data)=>{
      this.conference = data ;
      console.log("this is conference details  :",this.conference)
    },(error)=>{
      console.error("error fetching conference details:",error);
    }
    );
    this.deleteConfForm = this._fb.group({
      check: [false]
    })
    console.log(this.deleteConfForm.value.check)
  }


  deleteConference(id:number){


    
    if (this.deleteConfForm.value.check) {    
    this._confService.deleteConference(id).subscribe({
      next:(response)=>{
        this._toastrService.success("Conference Deleted!","Success")
        this.router.navigate(['/conferences'])
    },error: console.log,
    })

  }else{
    this._toastrService.error("Please check first!")
  }
}
}
