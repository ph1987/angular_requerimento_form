import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//PRIMENG COMPONENTES
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DialogModule} from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
//CHECKBOX
import { NgxPrettyCheckboxModule } from 'ngx-pretty-checkbox';

//SERVICES

//MATERIAL MODULES
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RequerimentoComponent } from './requerimento/requerimento.component';
import { DadosRequerimentoComponent } from './requerimento/dados-requerimento/dados-requerimento.component';
import { RequerimentoFooterComponent } from './requerimento/footer/footer.component';
import { RequerimentoHeaderComponent } from './requerimento/header/header.component';
import { RequerimentoSidebarComponent } from './requerimento/sidebar/sidebar.component';
import { DadosRequerenteComponent } from './requerimento/dados-requerente/dados-requerente.component';
import { EnderecoSedeComponent } from './requerimento/endereco-sede/endereco-sede.component';
import { EnderecoEmpreendimentoAtividadeComponent } from './requerimento/endereco-empreendimento-atividade/endereco-empreendimento-atividade.component';
import { EnderecoCorrespondenciaComponent } from './requerimento/endereco-correspondencia/endereco-correspondencia.component';
import { RepresentanteLegalComponent } from './requerimento/representante-legal/representante-legal.component';
import { ContatoComponent } from './requerimento/contato/contato.component';
import { ResponsavelTecnicoComponent } from './requerimento/responsavel-tecnico/responsavel-tecnico.component';
import { DocumentosComponent } from './requerimento/documentos/documentos.component';
import { FinalizadoComponent } from './requerimento/finalizado/finalizado.component';

@NgModule({
  declarations: [
    AppComponent,
    RequerimentoComponent,
    DadosRequerimentoComponent,
    RequerimentoFooterComponent,
    RequerimentoHeaderComponent,
    RequerimentoSidebarComponent,
    DadosRequerenteComponent,
    EnderecoSedeComponent,
    EnderecoEmpreendimentoAtividadeComponent,
    EnderecoCorrespondenciaComponent,
    RepresentanteLegalComponent,
    ContatoComponent,
    ResponsavelTecnicoComponent,
    DocumentosComponent,
    FinalizadoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    DialogModule,
    NgxPrettyCheckboxModule,
    RadioButtonModule,
    MatRadioModule,
    MatStepperModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
