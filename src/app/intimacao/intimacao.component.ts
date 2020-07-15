import { Component, OnInit } from '@angular/core';
import { Intimacao } from '../models/intimacoes';

@Component({
  selector: 'app-intimacao',
  templateUrl: './intimacao.component.html',
  styleUrls: ['./intimacao.component.scss']
})
export class IntimacaoComponent implements OnInit {
    intimacao: Intimacao[] = [];
    regModel: Intimacao;
    showNew: Boolean = false;
    submitType: string = 'Save';
    selectedRow: number;
    estados: string[] = ["Company A", "Company B", "Company C", "Company D", "Company E"];

  constructor() {
      this.intimacao.push(
      new Intimacao(
        'Marcos',
            '',
            '',
        'endereço',
        '00000000',
        'parana',
        'resr',
        'processo'
      )
    );

    this.intimacao.push(
      new Intimacao(
        'Ana',
        '',
        '',
        'endereço',
        '00000000',
        'parana',
        'resr'
      )
    );

    this.intimacao.push(
      new Intimacao(
        'VVesley',
     '',
     '',
        'endereço',
        '00000000',
        'parana',
        'resr',
        'processo'
      )
    );
  }


onNew() {
  this.regModel = new Intimacao();
  this.submitType = 'Save';
  this.showNew = true;
  }

onSave() {
  if (this.submitType === 'Save') {
    this.intimacao.push(this.regModel);
  } else {

  // Update existing

  this.intimacao[this.selectedRow].nome = this.regModel.nome;
  this.intimacao[this.selectedRow].adress = this.regModel.adress;
  this.intimacao[this.selectedRow].cpf = this.regModel.cpf;
  this.intimacao[this.selectedRow].dataExecucao = this.regModel.dataExecucao;
  this.intimacao[this.selectedRow].dataIntimacao = this.regModel.dataIntimacao;
  this.intimacao[this.selectedRow].estado = this.regModel.estado;
  this.intimacao[this.selectedRow].oficialDeJustica = this.regModel.oficialDeJustica;
  this.intimacao[this.selectedRow].processo = this.regModel.processo;
}

  this.showNew = false;

}

onEdit(index: number) {
  this.selectedRow = index;
  this.regModel = new Intimacao();
  // Retrieve selected
  this.regModel = Object.assign({}, this.intimacao[this.selectedRow]);
  this.submitType = 'Update';
  this.showNew = true;
}

onDelete(index: number) {
  this.intimacao.splice(index, 1);
}

onCancel() {
  this.showNew = false;
}

onChangeCompany(company: string) {
  this.regModel.estado = company;
}

  ngOnInit() {}
}


