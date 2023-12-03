import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from '../../shared/shared.module';

@Component({
  standalone: true,
  imports:[ ComponentsModule, SharedModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initFlowbite();
  }

}
