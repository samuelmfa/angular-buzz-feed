export interface ICardQuizInfoData {
  title: string;
  options: Array<IInfoQuiz>;
}

export interface IInfoQuiz {
  title: string;
  nota: number;
  heroi: boolean;
  vilao: boolean;
}
