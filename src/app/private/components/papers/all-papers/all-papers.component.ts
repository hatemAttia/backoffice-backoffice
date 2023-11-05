import { Component, Input, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { PapersService } from '../services/papers.service';
@Component({
  selector: 'app-all-papers',
  templateUrl: './all-papers.component.html',
  styleUrls: ['./all-papers.component.scss']
})
export class AllPapersComponent implements OnInit {
  @Input()
  conferenceId!: any;

  displayedColumns: string[] = ['title', 'resume','keywords', 'status','open','docPdf'];
  dataSource!: MatTableDataSource<any>; 
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
    constructor(private _papersService : PapersService) { }
    ngOnInit(): void {
      this.getConfPapers(this.conferenceId);
    }
  
  
    getConfPapers(confId: any) {
      this._papersService.getPapers(confId).subscribe({
        next: (res) => {
          console.log(confId, "this the data source", JSON.stringify(res));
    
          // Check if res is an object and convert it into an array of one object
          const dataArray = Array.isArray(res) ? res : [res];
          const mappedData = this.mappingPapers(dataArray);
          this.dataSource = new MatTableDataSource(mappedData);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error: (err) => {
          console.error("Error fetching data:", err);
        },
      });
    }
  
    mappingPapers(data: any[]) {
      if (Array.isArray(data)) {
        return data.map(item => ({
          title: item.title,
          resume: item.resume,
          keywords: item.keywords,
          status: item.status,
          docPdf: item.docPdf,
        }));
      } else {
        console.error("Data is not an array:", data);
        return [];
      }
    }
}
