import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-result',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.css']
})
export class CardResultComponent implements OnInit {

  @Input() result: string | undefined;

  constructor() { }

  ngOnInit() {
  }

  reiniciar(){
    window.location.reload();
  }

}
