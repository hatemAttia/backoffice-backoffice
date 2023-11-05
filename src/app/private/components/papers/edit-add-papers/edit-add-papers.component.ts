import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { PapersService } from '../services/papers.service';

@Component({
selector: 'app-edit-add-papers',
templateUrl: './edit-add-papers.component.html',
styleUrls: ['./edit-add-papers.component.scss'],

})
export class EditAddPapersComponent implements OnInit {
  PaperForm: FormGroup;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes = [13, 188]; // Customize as needed
  conferenceId :any;
  public paperFile :any = File ;

  constructor(private fb: FormBuilder,private _activatedRoute:ActivatedRoute,
    private _paperService: PapersService) {

    this.PaperForm = this.fb.group({
      keywords: this.fb.array([]),
      title: ['',Validators.required],
      resume: ['',Validators.required],
      conferenceId: this.conferenceId
    });
  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((param)=>{
      this.conferenceId= param.get('id');
    })
  }

  getKeywordArray(): FormArray {
    return this.PaperForm.get('keywords') as FormArray;
  }

  addKeyword(event: any): void {
    const value = (event.value || '').trim();
    if (value) {
      this.getKeywordArray().push(this.fb.control(value));
    }
    event.input.value = '';
  }

  removeKeyword(index: number): void {
    this.getKeywordArray().removeAt(index);
  }


  onSelectFile(event: any ){
    this.paperFile =  event.target.files[0];
    console.log('file',this.paperFile)
  }

  savePaper(submitForm :FormGroup){
    if (submitForm.valid) {
      const paper = submitForm.value;
      const formData = new FormData();

      formData.append("paper", JSON.stringify(paper));
      formData.append("docPdf", this.paperFile);
      //formData.append("conferenceId", this.conferenceId);
      //new Response(formData).text().then(console.log) 
      console.log(formData); // This line logs the FormData object
      this._paperService.saveConfPaper(formData).subscribe((response) => {
        console.log(response);
    })
  } else {
    console.log(submitForm.value);
  }
}

}
