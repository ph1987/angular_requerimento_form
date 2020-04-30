import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-endereco-sede',
  templateUrl: './endereco-sede.component.html',
  styleUrls: ['./endereco-sede.component.css']
})
export class EnderecoSedeComponent implements OnInit {

  tituloPagina = "Endereço da Sede";
  frmRequerimento: FormGroup;
  btnLabel = "Salvar";
  envioValido = false;
  arrCamposInvalidos = [] = [];

  constructor(private fb: FormBuilder) {  

    this.fnInitForm();

  }

  ngOnInit(): void {
  }

  fnInitForm() {

    this.frmRequerimento = new FormGroup({
      cep: new FormControl(),
      logradouro: new FormControl(),
      complemento: new FormControl(),
      numero: new FormControl(),
      bairro: new FormControl(),
      municipio: new FormControl(),
      uf: new FormControl(),
    });
  }

  onSubmit() {
    
    console.log(this.frmRequerimento.value);
    this.validacao();

    if (this.envioValido) {

      alert("Dados salvos com sucesso");

    } else {

      let camposInvalidosAlertMsg = 'Por favor, preencha todos os campos obrigatórios:\r\n\r\n';
      this.arrCamposInvalidos.forEach(function (value) {
        camposInvalidosAlertMsg += '- ' + value + '\r\n';
      });
      alert(camposInvalidosAlertMsg);

    }

  }

  validacao() {

    this.arrCamposInvalidos = [];           // zera o array
    this.envioValido = true;

    if (!(this.frmRequerimento.controls['cep'].value)) {
      this.envioValido = false;
      this.arrCamposInvalidos.push('CEP');
    }
    if (!(this.frmRequerimento.controls['logradouro'].value)) {
      this.envioValido = false;
      this.arrCamposInvalidos.push('Logradouro');
    }
    if (!(this.frmRequerimento.controls['numero'].value)) {
      this.envioValido = false;
      this.arrCamposInvalidos.push('Número');
    }
    if (!(this.frmRequerimento.controls['bairro'].value)) {
      this.envioValido = false;
      this.arrCamposInvalidos.push('Bairro');
    }
    if (!(this.frmRequerimento.controls['municipio'].value)) {
      this.envioValido = false;
      this.arrCamposInvalidos.push('Município');
    }

  }

}
