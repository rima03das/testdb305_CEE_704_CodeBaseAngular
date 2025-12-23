import { Component, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-cee-loader',
  templateUrl: './cee-loader.component.html',
  styleUrls: ['./cee-loader.component.scss'],
  standalone: true,
  imports: [MatProgressSpinnerModule]
})
export class CeeLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
