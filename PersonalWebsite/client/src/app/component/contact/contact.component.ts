import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/service/configuration.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact_config: any;
  
  constructor(private config: ConfigurationService) { }

  ngOnInit() {
    this.contact_config = this.config.get('contact');
  }

  submit(){
    console.log('submit form');
  }

}
