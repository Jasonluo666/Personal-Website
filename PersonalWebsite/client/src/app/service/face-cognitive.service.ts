import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class FaceCognitiveService {
  backend = this.config.get('backend');

  constructor(private http : HttpClient, private config: ConfigurationService) { }

  analyzeFace(img_url: string){
    return this.http.get(this.backend + 'api/face_cognitive/' + img_url);
  }
}
