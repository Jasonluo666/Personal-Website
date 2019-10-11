import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FaceCognitiveService {

  constructor(private http : HttpClient) { }

  analyzeFace(img_url: string){
    return this.http.get('http://localhost:3000/api/face_cognitive/' + img_url);
  }
}
