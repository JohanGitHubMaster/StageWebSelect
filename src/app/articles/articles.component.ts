import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements AfterViewInit{

  displayedColumns: string[] = ['priorite', 'commande', 'ID', 'client','hits','traitee','hitsValides','localisation','origine','lecteur'];
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
  priorityId!:number;
  

  @ViewChild
  (MatPaginator)paginator!: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  ShowArticles(element:PeriodicElement){
    this.priorityId = element.priorite
    this.router.navigate(["/articleToValidate"])
    console.log(element)
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
