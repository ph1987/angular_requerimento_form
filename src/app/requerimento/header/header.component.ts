import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-requerimento',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class RequerimentoHeaderComponent implements OnInit {

  usuario : string = "UsuarioTeste"
  
  constructor(private route: Router) { }

  url: string = "";

  ngOnInit(): void {
    this.url = this.route.url;
    console.log(this.url);
  }

}
