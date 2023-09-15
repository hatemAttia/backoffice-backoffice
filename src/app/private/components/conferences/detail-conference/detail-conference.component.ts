import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConferencesService } from '../services/conferences.service';
import { Conference } from '../context/DTO';
@Component({
  selector: 'app-detail-conference',
  templateUrl: './detail-conference.component.html',
  styleUrls: ['./detail-conference.component.scss']
})
export class DetailConferenceComponent implements OnInit {


  conference: Conference;

  constructor(private activatedRoute:ActivatedRoute,
    private _router:Router,
    private _confService : ConferencesService,
    private _toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getConferenceDetail(params["id"])
      }
    })
  }

  getConferenceDetail(id:number) {
    this._confService.getConferenceDetail(id).subscribe((response) => {
      this.conference = response.data[0];
    });
  }

}
