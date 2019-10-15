import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class FaceCognitiveService {
  backend = this.config.get('backend');
  // backend = 'http://localhost:3000/';

  constructor(private http : HttpClient, private config: ConfigurationService) { }

  analyzeFace(img_url: string){
    return this.http.get(this.backend + 'api/face_cognitive/' + img_url);
  }

  upload(img: File, cb){
    let formData: FormData = new FormData(); 
    formData.append('image', img); 
    return this.http.post(this.backend + 'api/img/', formData).subscribe((data: any) => {
      console.log(data);
      
      var url = data.path;
      cb(url);
    });
  }
}
