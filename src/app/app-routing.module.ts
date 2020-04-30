import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequerimentoComponent } from './requerimento/requerimento.component';
import { DadosRequerimentoComponent } from './requerimento/dados-requerimento/dados-requerimento.component';
import { RequerimentoFooterComponent } from './requerimento/footer/footer.component';
import { RequerimentoSidebarComponent } from './requerimento/sidebar/sidebar.component';
import { RequerimentoHeaderComponent } from './requerimento/header/header.component';
import { DadosRequerenteComponent } from './requerimento/dados-requerente/dados-requerente.component';
import { EnderecoSedeComponent } from './requerimento/endereco-sede/endereco-sede.component';
import { EnderecoEmpreendimentoAtividadeComponent } from './requerimento/endereco-empreendimento-atividade/endereco-empreendimento-atividade.component';
import { EnderecoCorrespondenciaComponent } from './requerimento/endereco-correspondencia/endereco-correspondencia.component';
import { RepresentanteLegalComponent } from './requerimento/representante-legal/representante-legal.component';
import { ContatoComponent } from './requerimento/contato/contato.component';
import { ResponsavelTecnicoComponent } from './requerimento/responsavel-tecnico/responsavel-tecnico.component';
import { DocumentosComponent } from './requerimento/documentos/documentos.component';
import { FinalizadoComponent } from './requerimento/finalizado/finalizado.component';


const routes: Routes = [
  /*
  {
    path:'requerente',component:PrincipalLoginComponent, children: 
      [
        {path:'login',component:LoginComponent},
        {path:'cadastrar',component:CadastroUsuarioComponent},
        {path:'lembrar-senha',component:LembrarSenhaComponent},
        
      ]
  }, 
  
  {
    path:'inicial',component:PrincipalComponent, children: 
      [
        {path:'download-documentacao',component:DownloadArquivosUsuarioComponent},
        {path:'pre',component:PreTelaComponent},
        {path:'selecionar-instrumento',component:SelecionaInstrumentoComponent},
        {path:'enquadramento',component:EnquadramentoComponent}
      ]
  },
  */

  {
    path:'requerimento',component:RequerimentoComponent, children: 
      [
        {path:'dados-requerimento',component:DadosRequerimentoComponent},
        {path:'dados-requerente',component:DadosRequerenteComponent},
        {path:'endereco-sede', component:EnderecoSedeComponent},
        {path:'endereco-empreendimento-atividade', component:EnderecoEmpreendimentoAtividadeComponent},
        {path:'endereco-correspondencia', component:EnderecoCorrespondenciaComponent},
        {path:'representante-legal', component:RepresentanteLegalComponent},
        {path:'contato', component:ContatoComponent},
        {path:'responsavel-tecnico', component:ResponsavelTecnicoComponent},
        {path:'documentos', component:DocumentosComponent},
        {path:'finalizado', component:FinalizadoComponent}
      ]
  },
  
  {path:'',pathMatch:'full',redirectTo:'requerimento/dados-requerimento'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const SharedComponents = [RequerimentoHeaderComponent, RequerimentoFooterComponent, RequerimentoSidebarComponent] 