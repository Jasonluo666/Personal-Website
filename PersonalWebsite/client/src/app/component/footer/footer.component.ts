import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/service/configuration.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer_config: any;
  constructor(private config: ConfigurationService) { }

  ngOnInit() {
    this.footer_config = this.config.get('footer');
  }

}
