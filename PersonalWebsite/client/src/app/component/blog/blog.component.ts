import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { ConfigurationService } from 'src/app/service/configuration.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog_config: any;

  constructor(private config: ConfigurationService) { }

  ngOnInit() {
    this.blog_config = this.config.get('blog');
  }

}
