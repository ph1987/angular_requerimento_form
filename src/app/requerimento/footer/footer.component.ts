import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-requerimento',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class RequerimentoFooterComponent implements OnInit {

  versao : string = "0.1";
  constructor() { }

  ngOnInit(): void {
  }

}
