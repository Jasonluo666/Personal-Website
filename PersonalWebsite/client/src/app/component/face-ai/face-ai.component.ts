import { Component, OnInit } from '@angular/core';
import { FaceCognitiveService } from 'src/app/service/face-cognitive.service';

@Component({
  selector: 'app-face-ai',
  templateUrl: './face-ai.component.html',
  styleUrls: ['./face-ai.component.css']
})
export class FaceAIComponent implements OnInit {

  constructor(private service: FaceCognitiveService) { }

  ngOnInit() {
    this.analyzeFace(document.getElementById("img").getAttribute('src'));
  }

  analyzeFace(img_url: string){
    this.service.analyzeFace(img_url).subscribe((data: string) => {
      console.log(JSON.parse(data));
    }, err => {
      console.log(err);
    });
  }
}
