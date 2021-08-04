import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IFileProps } from './IFileModel';

import { finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllFiles()
  }

  uploadFiles: FileList;
  progress: number = 0

  files$: Observable<IFileProps[]> | undefined;

  // functions to get all files

  getAllFiles(){
    this.files$ = this.http.get<IFileProps[]>("http://127.0.0.1:8080/api/files");
  }

   // functions to delete a especific file

   deleteFile(id: number){
    this.http.delete(`http://127.0.0.1:8080/api/files/${id}`).pipe(
      finalize(() => this.getAllFiles())
    ).subscribe();
  }


  // functions to upload files
  getFiles(event){
    this.uploadFiles = event.target.files;
  }

  onUploadFile(){
    if(!this.uploadFiles){
      return;
    }
    this.progress = 0;

    const formData = new FormData();

    console.log(this.uploadFiles);

    for(let i = 0 ; i < this.uploadFiles.length ; i++){
      formData.append('files', this.uploadFiles[i])
    }
    this.http.post("http://127.0.0.1:8080/api/files/uploads", formData, {
      observe: 'events',
      reportProgress: true
    }).subscribe((event: HttpEvent<Object>) => {
        if(event.type === HttpEventType.Response){
          console.log("Upload Finalized!");
          this.getAllFiles();
        } else if(event.type === HttpEventType.UploadProgress){
          this.progress = Math.floor((event.loaded * 100) / event.total)
          console.log(this.progress);
        }
    })
  }

}
