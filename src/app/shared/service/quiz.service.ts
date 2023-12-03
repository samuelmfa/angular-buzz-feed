import {
  ICardQuizInfoData,
  IInfoQuiz,
} from './../interface/card-quiz-info.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private totalNotaSuperHeroi: number = 0;
  private totalNotaSuperVilao: number = 0;

  constructor() {}

  somaValores(dados: IInfoQuiz) {
    dados.heroi ? this.somaHeroi(dados.nota) : this.somaVilao(dados.nota);
  }

  getResultado() {
    return this.totalNotaSuperHeroi > this.totalNotaSuperVilao
      ? 'Você é um Super Heroi'
      : 'Você é um super vilão';
  }

  private somaHeroi(number: number) {
    this.totalNotaSuperHeroi = this.totalNotaSuperHeroi + number;
  }

  private somaVilao(number: number) {
    this.totalNotaSuperVilao = this.totalNotaSuperVilao + number;
  }
}
