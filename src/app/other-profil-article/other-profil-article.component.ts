import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-other-profil-article',
  templateUrl: './other-profil-article.component.html',
  styleUrls: ['./other-profil-article.component.css']
})
export class OtherProfilArticleComponent {
  displayedColumns: string[] = ['priorite', 'commande', 'ID', 'client','hits','traitee','hitsValides','localisation','origine','lecteur'];
  priorityId!:number;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA.slice(0,5));
  dataList = ELEMENT_DATA.slice(0,5);
  constructor(@Inject(MAT_DIALOG_DATA) public data:string) 
  {
    console.log(this.data);
    
  }

  ShowArticles(element:PeriodicElement){
    this.priorityId = element.priorite
    console.log(element)
  }
}

export interface PeriodicElement {
  priorite: number;
  commande: string;
  ID: number;
  client: string;
  hits: number;
  traitee: number;
  hitsValides: number;
  localisation: string;
  origine: string;
  lecteur: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 2, commande: 'ACME', ID: 30122, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 3, commande: 'ACME', ID: 30123, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 4, commande: 'ACME', ID: 30124, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 5, commande: 'ACME', ID: 30125, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 6, commande: 'ACME', ID: 30126, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 7, commande: 'ACME', ID: 30127, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 8, commande: 'ACME', ID: 30128, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 9, commande: 'ACME', ID: 30129, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 10, commande: 'ACME', ID: 30130, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 11, commande: 'ACME', ID: 30131, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 12, commande: 'ACME', ID: 30132, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 13, commande: 'ACME', ID: 30133, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 14, commande: 'ACME', ID: 30134, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 15, commande: 'ACME', ID: 30135, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 16, commande: 'ACME', ID: 30136, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 17, commande: 'ACME', ID: 30137, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 18, commande: 'ACME', ID: 30138, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 19, commande: 'ACME', ID: 30139, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 20, commande: 'ACME', ID: 30140, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
];
