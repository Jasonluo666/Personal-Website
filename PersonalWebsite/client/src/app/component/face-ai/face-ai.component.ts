import { Component, OnInit } from '@angular/core';
import { FaceCognitiveService } from 'src/app/service/face-cognitive.service';

@Component({
  selector: 'app-face-ai',
  templateUrl: './face-ai.component.html',
  styleUrls: ['./face-ai.component.css']
})
export class FaceAIComponent implements OnInit {
  data: any;

  public imagePath;
  imgURL: any;
  imgFile: File;
  public message: string;

  constructor(private service: FaceCognitiveService) { }

  ngOnInit() {
  }

  previewLocal(files) {
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      this.imgURL = null;
      this.data = null;
      return;
    }
    
    this.message = null;
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
      // this.analyzeFace(this.imgURL);
    }

    this.imgFile = files[0]
  }

  previewOnline(){
    var url = (<HTMLInputElement>document.getElementById("url_input")).value;
    
    console.log(url);
    if (!url.endsWith(".jpg") && !url.endsWith(".jpeg") && !url.endsWith(".png")) {
      this.message = "Only images are supported.";
      this.imgURL = null;
      this.data = null;
      return;
    }

    this.message = null;
    this.imgURL = url;
    this.imgFile = null;
  }

  upload() {
    if(this.imgFile == null){
      this.analyzeFace(this.imgURL);
    }
    else {
      this.service.upload(this.imgFile, (url) => {
        this.analyzeFace(url);
        console.log(url);
      });
    }
  }

  analyzeFace(img_url: string){
    this.data = null;
    this.service.analyzeFace(img_url).subscribe((data: string) => {
      this.data = JSON.parse(data);

      if(this.data.error !== undefined){
        this.data = null;
      }
    }, err => {
      console.log(err);
    });
  }
}
