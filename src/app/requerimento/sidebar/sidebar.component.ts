import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-sidebar-requerimento',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class RequerimentoSidebarComponent implements OnInit {

  ativo : boolean = false;
  urlPagina : string;
  constructor(private router: Router, location: Location) { 
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.urlPagina = location.path();        
      } 
    });
  }

  ngOnInit(): void {
  }

  logout() {
    
  }

}
