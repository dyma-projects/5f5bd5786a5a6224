import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  public compteur:number = 0 ;
  @Output() changementCompteur = new EventEmitter();
  @Input() compteurEnfant:number ;

  constructor() { }

  ngOnInit() {
  }

  plusCompteur(){
    this.compteur++;
    this.changementCompteur.emit({
      value: this.compteur
    });
  }

  moinsCompteur(){
    this.compteur--;
    this.changementCompteur.emit({
      value: this.compteur
    });
  }

}
