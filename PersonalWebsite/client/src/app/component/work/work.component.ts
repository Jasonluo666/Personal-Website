import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/service/configuration.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  portfolio_config: any;

  constructor(private config: ConfigurationService) { }

  ngOnInit() {
    this.portfolio_config = this.config.get('portfolio');
  }

}
