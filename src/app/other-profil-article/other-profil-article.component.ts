import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { VarticleToValidate } from 'src/models/VarticleToValidate.model';
import { VarticleToValidateService } from 'src/shared/VarticleToValidate/VarticleToValidate.service';

@Component({
  selector: 'app-other-profil-article',
  templateUrl: './other-profil-article.component.html',
  styleUrls: ['./other-profil-article.component.css']
})
export class OtherProfilArticleComponent {
  displayedColumns: string[] = ['priorite', 'commande', 'ID', 'client', 'Ok', 'NOK','Details'];
  priorityId!: number;
  OtherArticleToTreat!: VarticleToValidate[];
  dataSource = new MatTableDataSource<VarticleToValidate>();
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: VarticleToValidate,
  private varticleToValidateService:VarticleToValidateService) {
    console.log(this.data);
  }

  //ngOnInit
  ngOnInit(){
    console.log(this.data.SourceId)
    this.varticleToValidateService.getVarticleToValidateBySourceId(0,10,this.data.SourceId).subscribe(result=>{
      
      console.log(this.data.SourceId)
      console.log(result)
      this.dataSource = new MatTableDataSource<VarticleToValidate>(result);
    })
  }

  ShowArticles(element: PeriodicElement) {
    this.priorityId = element.priorite
    console.log(element)
  }
}

export interface PeriodicElement {
  priorite: number;
  commande: string;
  ID: number;
  client: string;
  Ok: boolean;
  nOk: boolean;
  details: number;
}



const ELEMENT_DATA: PeriodicElement[] = [
  { priorite: 1, commande: 'ACME', ID: 30121, client: 'H', Ok: false, nOk: true, details: 1 },
  { priorite: 2, commande: 'ACME', ID: 30122, client: 'H', Ok: true, nOk: false, details: 1 },
  { priorite: 3, commande: 'ACME', ID: 30123, client: 'H', Ok: false, nOk: true, details: 1 },
  { priorite: 4, commande: 'ACME', ID: 30124, client: 'H', Ok: true, nOk: false, details: 1 },
  { priorite: 5, commande: 'ACME', ID: 30125, client: 'H', Ok: true, nOk: false, details: 1 },
  { priorite: 6, commande: 'ACME', ID: 30126, client: 'H', Ok: false, nOk: true, details: 1 },
  { priorite: 7, commande: 'ACME', ID: 30127, client: 'H', Ok: true, nOk: false, details: 1 },
  { priorite: 8, commande: 'ACME', ID: 30128, client: 'H', Ok: false, nOk: true, details: 1 },
  { priorite: 9, commande: 'ACME', ID: 30129, client: 'H', Ok: true, nOk: false, details: 1 },
  { priorite: 10, commande: 'ACME', ID: 30130, client: 'H', Ok: false, nOk: true, details: 1 },
  { priorite: 11, commande: 'ACME', ID: 30131, client: 'H', Ok: true, nOk: false, details: 1 },
  { priorite: 12, commande: 'ACME', ID: 30132, client: 'H',Ok: false, nOk: true, details: 1 },
  { priorite: 13, commande: 'ACME', ID: 30133, client: 'H', Ok: true, nOk: false, details: 1 },
  { priorite: 14, commande: 'ACME', ID: 30134, client: 'H', Ok: false, nOk: true, details: 1 }
];
