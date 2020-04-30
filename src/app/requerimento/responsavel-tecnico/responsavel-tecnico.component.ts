import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-responsavel-tecnico',
  templateUrl: './responsavel-tecnico.component.html',
  styleUrls: ['./responsavel-tecnico.component.css']
})
export class ResponsavelTecnicoComponent implements OnInit {

  tituloPagina = "Responsável Técnico";
  btnLabel = "Salvar";
  envioValido = false;
  arrCamposInvalidos = [] = [];

  envioValidoTel = false;
  arrCamposInvalidosTel = [] = [];

  envioValidoEmail = false;
  arrCamposInvalidosEmail = [] = [];

  frmRequerimento: FormGroup;
  frmTelefone: FormGroup;
  frmEmail: FormGroup;

  arrRespTec = [] = [];
  arrTelefones = [] = [];
  arrEmails = [] = [];

  constructor(private fb: FormBuilder) {  

    this.fnInitForm();

  }

  ngOnInit(): void {
  }

  onSubmit() {

    this.validacao();

    if (this.envioValido) {
 
      this.arrRespTec.push({ 
        'cpfRespTec': this.frmRequerimento.value.cpfRespTec, 
        'nomeRespTec': this.frmRequerimento.value.nomeRespTec,
        'formacaoRespTec': this.frmRequerimento.value.formacaoRespTec, 
        'conselhoRespTec': this.frmRequerimento.value.conselhoRespTec,
        'registroRespTec': this.frmRequerimento.value.registroRespTec, 
        'ctfRespTec': this.frmRequerimento.value.ctfRespTec,
        'telefone': this.arrTelefones,
        'email': this.arrEmails
      });

      this.frmRequerimento.controls['cpfRespTec'].setValue('');
      this.frmRequerimento.controls['nomeRespTec'].setValue('');
      this.frmRequerimento.controls['formacaoRespTec'].setValue('');
      this.frmRequerimento.controls['conselhoRespTec'].setValue('');
      this.frmRequerimento.controls['registroRespTec'].setValue('');
      this.frmRequerimento.controls['ctfRespTec'].setValue('');
      this.arrTelefones = [];
      this.arrEmails = [];

      console.log(this.arrRespTec);

      alert("Dados adicionados com sucesso");

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

    if (!(this.frmRequerimento.controls['nomeRespTec'].value)) {
      this.envioValido = false;
      this.arrCamposInvalidos.push('Nome');
    }
    if (this.arrTelefones.length < 1) {
      this.envioValido = false;
      this.arrCamposInvalidos.push('Pelo menos um número de telefone');
    }
    if (this.arrEmails.length < 1) {
      this.envioValido = false;
      this.arrCamposInvalidos.push('Pelo menos um endereço de e-mail');
    }

  }

  validacaoTel() {

    this.arrCamposInvalidosTel = [];           // zera o array
    this.envioValidoTel = true;

    if (!(this.frmTelefone.controls['tipo'].value)) {
      this.envioValidoTel = false;
      this.arrCamposInvalidosTel.push('Tipo');
    }
    if (!(this.frmTelefone.controls['ddd'].value)) {
      this.envioValidoTel = false;
      this.arrCamposInvalidosTel.push('DDD');
    }
    if (!(this.frmTelefone.controls['numero'].value)) {
      this.envioValidoTel = false;
      this.arrCamposInvalidosTel.push('Número');
    }

  }

  validacaoEmail() {

    this.arrCamposInvalidosEmail = [];           // zera o array
    this.envioValidoEmail = true;

    if (!(this.frmEmail.controls['tipo'].value)) {
      this.envioValidoEmail = false;
      this.arrCamposInvalidosEmail.push('Tipo');
    }
    if (!(this.frmEmail.controls['email'].value)) {
      this.envioValidoEmail = false;
      this.arrCamposInvalidosEmail.push('E-mail');
    }

  }

  onSubmitTelefone() {
    
    this.validacaoTel();

    if (this.envioValidoTel) {

      this.arrTelefones.push({ 
        'tipo': this.frmTelefone.value.tipo,  
        'ddd': this.frmTelefone.value.ddd,
        'numero': this.frmTelefone.value.numero,
        'ramal': this.frmTelefone.value.ramal
      });

      this.frmTelefone.reset();

    } else {

      let camposInvalidosAlertMsg = 'Por favor, preencha todos os campos obrigatórios:\r\n\r\n';
      this.arrCamposInvalidosTel.forEach(function (value) {
        camposInvalidosAlertMsg += '- ' + value + '\r\n';
      });
      alert(camposInvalidosAlertMsg);

    }

  }

  onSubmitEmail() {

    this.validacaoEmail();

    if (this.envioValidoEmail) {
    
      this.arrEmails.push({ 
        'tipo': this.frmEmail.value.tipo,  
        'email': this.frmEmail.value.email,
      });

      this.frmEmail.reset();

    } else {

      let camposInvalidosAlertMsg = 'Por favor, preencha todos os campos obrigatórios:\r\n\r\n';
      this.arrCamposInvalidosEmail.forEach(function (value) {
        camposInvalidosAlertMsg += '- ' + value + '\r\n';
      });
      alert(camposInvalidosAlertMsg);

    }

  }


  fnInitForm() {

    this.frmRequerimento = new FormGroup({
      cpfRespTec: new FormControl(''),
      nomeRespTec: new FormControl(''),
      formacaoRespTec: new FormControl(''),
      conselhoRespTec: new FormControl(),
      registroRespTec: new FormControl(),
      ctfRespTec: new FormControl(),
    });

    this.frmTelefone = new FormGroup({
      tipo: new FormControl(''),
      ddd: new FormControl(),
      numero: new FormControl(),
      ramal: new FormControl(),
    });

    this.frmEmail = new FormGroup({
      tipo: new FormControl(''),
      email: new FormControl(),
    });
    
  }

  excluirContato(i) {

    this.arrRespTec.splice(i, 1);

  }

  excluirTelefone(i) {

    this.arrTelefones.splice(i, 1);

  }

  excluirEmail(i) {

    this.arrEmails.splice(i, 1);

  }

}
