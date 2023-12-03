import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  ICardQuizInfoData,
  IInfoQuiz,
} from '../../shared/interface/card-quiz-info.interface';

@Component({
  selector: 'app-card-selection',
  templateUrl: './card-selection.component.html',
  styleUrls: ['./card-selection.component.css'],
})
export class CardSelectionComponent implements OnInit {
  @Input() dados: ICardQuizInfoData | undefined;

  @Output() resposta: EventEmitter<IInfoQuiz> = new EventEmitter<IInfoQuiz>();

  constructor() {}

  ngOnInit() {}

  enviaResposta(data: IInfoQuiz) {
    this.resposta.emit(data);
  }
}
