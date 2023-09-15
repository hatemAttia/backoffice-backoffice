import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EditAddConferenceComponent } from '../edit-add-conference/edit-add-conference.component';
import { ConferencesService } from '../services/conferences.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';




@Component({
  selector: 'app-all-conferences',
  templateUrl: './all-conferences.component.html',
  styleUrls: ['./all-conferences.component.scss']
})
export class AllConferencesComponent implements OnInit {

displayedColumns: string[] = ['title', 'description','organizerName', 'startDate', 'endDate','action'];
dataSource!: MatTableDataSource<any>;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


  constructor(public _dialog: MatDialog, private _confService : ConferencesService,private router: Router) { }
  
  ngOnInit(): void {
    this.getAllConferences(); 
  }

getAllConferences(){
  this._confService.getAllConferences().subscribe({
   next: (res) =>{
   console.log("this the data source "+ res);
   this.dataSource = new MatTableDataSource(this.mappingConferences(res));
   this.dataSource.sort =this.sort;
   this.dataSource.paginator =this.paginator ;

  },error: console.log,
});
}

mappingConferences(data : any[] ){
 let conferencesList = data.map(item =>{
  return{
    ...item,
    organizerName: item.organizer.name
  }
 })
 return conferencesList
}
  openAddConference(){
    const dialogRef = this._dialog.open(EditAddConferenceComponent, {
      width : '600px',
    });

    dialogRef.afterClosed().subscribe({
       next: (val)=>{
        if (val) {
          this.getAllConferences();
        }
       }
    })
  }

  openEditConference(data:any ){
    const dialogRef = this._dialog.open(EditAddConferenceComponent,{data,})

    dialogRef.afterClosed().subscribe({
       next: (val)=>{
        if (val) {
          this.getAllConferences();
        }
       }
    })
  }

  conferenceDetails(conference :any)
  {
    console.log('the details of confernce is '+ JSON.stringify(conference));
    this.router.navigate(['/conferences/details'])
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  }
  


