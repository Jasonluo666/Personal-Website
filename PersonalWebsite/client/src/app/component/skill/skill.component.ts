import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/service/configuration.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  service_config : any;
  constructor(private config: ConfigurationService) { }

  ngOnInit() {
    this.service_config = this.config.get('service');
  }

}
