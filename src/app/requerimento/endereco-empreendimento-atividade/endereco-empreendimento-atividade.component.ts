import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-endereco-empreendimento-atividade',
  templateUrl: './endereco-empreendimento-atividade.component.html',
  styleUrls: ['./endereco-empreendimento-atividade.component.css']
})
export class EnderecoEmpreendimentoAtividadeComponent implements OnInit {

  tituloPagina = "Endereço do Empreendimento / Atividade";
  frmRequerimento: FormGroup;
  btnLabel = "Salvar";
  envioValido = false;
  arrCamposInvalidos = [] = [];
  municipioTodos = false;

  envioValidoTel = false;
  arrCamposInvalidosTel = [] = [];

  envioValidoEmail = false;
  arrCamposInvalidosEmail = [] = [];

  frmMunicipio: FormGroup;
  frmTelefone: FormGroup;
  frmEmail: FormGroup;

  arrTelefones = [] = [];
  arrEmails = [] = [];
  arrMunicipios = [] = [];

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
      situacaoimovel: new FormControl(),
      imovelrural: new FormControl()
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

    this.frmMunicipio = new FormGroup({
      municipio: new FormControl(''),
      municipioTodos: new FormControl('')
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

  onSubmitMunicipio() {

    if (this.frmMunicipio.value.municipioTodos != true) {

      this.arrMunicipios.push({ 
        'municipio': this.frmMunicipio.value.municipio
      });

    } else {

      alert("Adicionar todos os municípios (inserir lógica)");

    }

    this.frmMunicipio.reset();

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

  excluirTelefone(i) {

    this.arrTelefones.splice(i, 1);

  }

  excluirEmail(i) {

    this.arrEmails.splice(i, 1);

  }

  excluirMunicipio(i) {

    this.arrMunicipios.splice(i, 1);

  }

  munTodosChange() {

    this.municipioTodos = !this.municipioTodos;

  }

}
