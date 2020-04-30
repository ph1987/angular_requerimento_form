import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dados-requerimento',
  templateUrl: './dados-requerimento.component.html',
  styleUrls: ['./dados-requerimento.component.css']
})
export class DadosRequerimentoComponent implements OnInit {

  tituloPagina = "Dados do Requerimento";
  frmRequerimento: FormGroup;
  btnLabel = "Salvar";

  constructor(private fb: FormBuilder) {  

    this.fnInitForm();

  }

  ngOnInit(): void {
  }

  fnInitForm() {

    this.frmRequerimento = new FormGroup({
      boleto: new FormControl({ value: '18000000257', disabled: true }),
      instrumento: new FormControl({ value: 'Certidão Ambiental de inexistência ou existência de dívida nos últimos cinco anos', disabled: true }),
    });
  }

  onSubmit() {
    
    console.log(this.frmRequerimento.value);
    //valida();

  }

}
