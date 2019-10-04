import { Injectable } from '@angular/core';
import {config} from '../configuration'

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  get(name){
    return config[name];
  }
}
