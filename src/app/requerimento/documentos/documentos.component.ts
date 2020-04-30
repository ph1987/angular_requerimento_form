import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  tituloPagina = "Documentos";
  frmRequerimento: FormGroup;
  btnLabel = "Salvar";
  envioValido = false;
  arrCamposInvalidos = [] = [];

  arrDocs = [] = [];

  constructor(private fb: FormBuilder) {  

    this.fnInitForm();

  }

  ngOnInit(): void {
  }

  fnInitForm() {

    this.frmRequerimento = new FormGroup({
      tipoDoc: new FormControl(),
      descricao: new FormControl(),
      documento: new FormControl()
    });
    
  }

  onSubmit() {

    console.log(this.frmRequerimento.value.documento);

    this.validacao();

    if (this.envioValido) {
    
      this.arrDocs.push({ 
        'tipoDoc': this.frmRequerimento.value.tipoDoc, 
        'descricao': this.frmRequerimento.value.descricao,
        'documento': this.frmRequerimento.value.documento
      });

      this.frmRequerimento.reset();
      console.log(this.arrDocs);

    } else {

      let camposInvalidosAlertMsg = 'Por favor, preencha todos os campos obrigatórios:\r\n\r\n';
      this.arrCamposInvalidos.forEach(function (value) {
        camposInvalidosAlertMsg += '- ' + value + '\r\n';
      });
      alert(camposInvalidosAlertMsg);

    }

  }

  updateFile(file: HTMLInputElement) {
    let name = file.value;
    return name;
  }

  validacao() {

    this.arrCamposInvalidos = [];           // zera o array
    this.envioValido = true;

    if (!(this.frmRequerimento.controls['documento'].value)) {
      this.envioValido = false;
      this.arrCamposInvalidos.push('Documento');
    }

  }

  excluirDoc(i) {

    this.arrDocs.splice(i, 1);

  }

}
