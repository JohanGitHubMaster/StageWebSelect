import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Observable, map, startWith } from 'rxjs';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements AfterViewInit{

  displayedColumns: string[] = ['priorite', 'commande', 'ID', 'client'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  @ViewChild
  (MatPaginator)paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(option => option.toLowerCase().includes(filterValue));
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
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
  {priorite: 1, commande: 'ACME', ID: 30121, client: 'H',hits:1,traitee:1,hitsValides:1,localisation:'Madagascar',origine:'Belgique',lecteur:'Jean'},
];
