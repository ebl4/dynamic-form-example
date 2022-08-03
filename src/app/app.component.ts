import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionService } from './core/services/question.service';
import { QuestionBase } from './shared/models/question-base';

@Component({
  selector: 'app-root',
  template: `
      <div>
        <h2>Job Application for Heroes</h2>
        <app-dynamic-form [questions]="question$ | async"></app-dynamic-form>
      </div>
      `,
  providers: [QuestionService]
})
export class AppComponent {
  question$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService){
    this.question$ = service.getQuestions();
  }
}
