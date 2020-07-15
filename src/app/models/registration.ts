import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Registration {
    constructor(
      public firstName: string = '',
      public lastName: string = '',
      public cpf: string = '',
      public email: string = '',
      public password: string = '',
    ) {}
  }

