import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/service/configuration.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  nav_config : any;
  constructor(private config: ConfigurationService) { }

  ngOnInit() {
    this.nav_config = this.config.get('nav');
  }

}
