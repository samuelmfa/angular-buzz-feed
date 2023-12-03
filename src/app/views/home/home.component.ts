import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { SharedModule } from '../../shared/shared.module';
import { RouterOutlet } from '@angular/router';
import { InfoDataQuiz } from '../../mock/data.mock';
import {
  ICardQuizInfoData,
  IInfoQuiz,
} from '../../shared/interface/card-quiz-info.interface';
import { QuizService } from '../../shared/service/quiz.service';

@Component({
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  totalData = InfoDataQuiz;
  number = 0;
  dataCard: ICardQuizInfoData | undefined;
  fim = false;
  resultado: string = '';

  dataInfoCard$ = new BehaviorSubject<ICardQuizInfoData | undefined>(undefined);

  constructor(protected service: QuizService) {}

  ngOnInit() {
    initFlowbite();
    this.dataInfoCard$.next(this.totalData.questoes[0]);
    this.dataInfoCard$.subscribe((dados) => (this.dataCard = dados));
  }

  nextQuestion(resposta: IInfoQuiz) {
    this.number++;
    if (this.totalData.questoes.length > this.number) {
      this.service.somaValores(resposta);
      this.dataInfoCard$.next(this.totalData.questoes[this.number]);
    } else {
      this.getResultado();
      this.fim = true;
    }
  }

  getResultado() {
    this.resultado = this.service.getResultado();
  }
}
