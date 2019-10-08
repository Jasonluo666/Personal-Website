import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-detection',
  templateUrl: './face-detection.component.html',
  styleUrls: ['./face-detection.component.css']
})
export class FaceDetectionComponent implements OnInit {
  video: any;
  
  constructor() { }

  ngOnInit() {
    this.video = document.getElementById('video');
    this.startVideo();
  }

  startVideo(){
    navigator.getUserMedia({video: {}},
      stream => this.video.srcObject = stream,
      err => console.log(err)
    );
  }
}
