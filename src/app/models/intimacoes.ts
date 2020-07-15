import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Intimacao {
    constructor(
      public nome: string = '',
      public dataIntimacao: string = '' ,
      public dataExecucao: string = '' ,
      public adress: string = '',
      public cpf: string = '',
      public estado: string = '',
      public oficialDeJustica: string = '',
      public processo: string = '',
    ) {}
  }



