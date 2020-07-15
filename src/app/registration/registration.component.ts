import { Component, OnInit } from '@angular/core';
import { Registration } from '../models/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    registrations: Registration[] = [];
    regModel: Registration;
    showNew: Boolean = false;
    submitType: string = 'Save';
    selectedRow: number;
  constructor() {
      this.registrations.push(
      new Registration(
        'Marcos',
        'Nespolo',
        '00000000',
        'marcos@gmail.com',
        'pass123'
      )
    );

    this.registrations.push(
      new Registration(
        'Ana',
        'Nicole',
        '00000000',
        'ana@gmail.com',
        'pass234'
      )
    );

    this.registrations.push(
      new Registration(
        'VVesley',
        'Caetano',
        '00000000',
        'vvesley@companyc.com',
        'pass345'
      )
    );
  }


onNew() {
  this.regModel = new Registration();
  this.submitType = 'Save';
  this.showNew = true;
  }

onSave() {
  if (this.submitType === 'Save') {
    this.registrations.push(this.regModel);
  } else {

  // Update existing

  this.registrations[this.selectedRow].firstName = this.regModel.firstName;
  this.registrations[this.selectedRow].lastName = this.regModel.lastName;
  this.registrations[this.selectedRow].email = this.regModel.email;
  this.registrations[this.selectedRow].cpf = this.regModel.cpf;
  this.registrations[this.selectedRow].password = this.regModel.password;
}

  this.showNew = false;

}

onEdit(index: number) {
  this.selectedRow = index;
  this.regModel = new Registration();
  // Retrieve selected
  this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
  this.submitType = 'Update';
  this.showNew = true;
}

onDelete(index: number) {
  this.registrations.splice(index, 1);
}

onCancel() {
  this.showNew = false;
}

  ngOnInit() {}
}


