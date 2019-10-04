import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/service/configuration.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about_config: any;

  constructor(private config: ConfigurationService) { }

  ngOnInit() {
    this.about_config = this.config.get('about');
  }

}
