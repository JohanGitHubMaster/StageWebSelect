import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, of, startWith } from 'rxjs';
import { VWebOrders } from 'src/models/VWebOrders.model';
import { VWebOrdersService } from 'src/shared/VWebOrders/VWebOrders.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements AfterViewInit {

  displayedColumns: string[] = ['priorite', 'commande', 'ID', 'client', 'hits', 'traitee', 'hitsValides', 'localisation', 'origine', 'lecteur'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  vWebOrders!:VWebOrders[];
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
  OrderControl = new FormControl('');
  CustomerIDControl = new FormControl('');
  OrderIdOptionsControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
  filteredCustomerIdOptions!: Observable<string[]>;
  filteredOrderOptions!: Observable<string[]>;
  filteredOrderIdOptions!: Observable<string[]>;
  priorityId!: number;
  


  @ViewChild
    (MatPaginator) paginator!: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vWebOrdersService:VWebOrdersService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.vWebOrdersService.getVWebOrders(1,1000).subscribe(result=>{
      this.vWebOrders = result.docs;
      //console.log(this.vWebOrders);
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
      //filtre des commandes
      this.filteredOrderOptions = this.OrderControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterOrder(value || '')),
      );

      //filtre par Id du client 
      this.filteredCustomerIdOptions = this.CustomerIDControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterCustomerID(value || '')),
      );

      //filtre par id de la Commande
      this.filteredOrderIdOptions = this.OrderIdOptionsControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterOrderID(value || '')),
      );

    })
    
  }



  ShowArticles(element: PeriodicElement) {
    this.priorityId = element.priorite
    this.router.navigate(["/articleToValidate"])
    console.log(element)
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    // const customer = this.vWebOrders.map(function(customer){
    //   return customer.Customer
    // })
    const unique = [...new Set(this.vWebOrders?.map(item => item.Customer))];
    // var s = this.vWebOrders?.map(function (value) {
    //   return value.Customer
    // });
    //console.log(unique)
   

    return unique?.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterOrder(value: string): string[] {
    const filterValue = value.toLowerCase();
    const unique = [...new Set(this.vWebOrders?.map(item => item.OrderName.toString()))];
    //console.log(unique)
    return unique?.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterCustomerID(value: string): string[] {
    const filterValue = value.toLowerCase();
    const unique = [...new Set(this.vWebOrders?.map(item => item.CustomerId.toString()))];
    //console.log(unique)
    return unique?.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterOrderID(value: string): string[] {
    const filterValue = value.toLowerCase();
    const unique = [...new Set(this.vWebOrders?.map(item => item.OrderId.toString()))];
    console.log(value)
    return unique?.filter(option => option.toLowerCase().includes(filterValue));
  }
  private _filterOrderByCustomer(value: string,vWebOrders:VWebOrders): string[] {
    const filterValue = value.toLowerCase();
    const unique = [...new Set(this.vWebOrders?.filter(item=>item.CustomerId==vWebOrders.CustomerId).map(item => item.OrderName.toString()))];
    console.log(value)
    return unique?.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterOrderIDByCustomer(value: string,vWebOrders:VWebOrders): string[] {
    const filterValue = value.toLowerCase();
    const unique = [...new Set(this.vWebOrders?.filter(item=>item.CustomerId==vWebOrders.CustomerId).map(item => item.OrderId.toString()))];
    console.log(value)
    return unique?.filter(option => option.toLowerCase().includes(filterValue));
  }

  setValueCustomer(event:any){
    // console.log(event);
    // console.log(this.vWebOrders?.filter(x=>x.CustomerId == event)[0])
    var result = this.vWebOrders?.filter(x=>x.CustomerId == event)[0];
    this.myControl.setValue(result.Customer)
    this.OrderControl.setValue('')
    this.OrderIdOptionsControl.setValue('')
    // const uniqueOrderId = [...new Set(this.vWebOrders?.filter(x=>x.CustomerId==result.CustomerId).map(item => item.OrderId.toString()))];
    // const uniqueOrderName = [...new Set(this.vWebOrders?.filter(x=>x.CustomerId==result.CustomerId).map(item => item.OrderName.toString()))];
    // this.filteredOrderIdOptions = of(uniqueOrderId)
    // this.filteredOrderOptions = of(uniqueOrderName)

     //filtre des commandes
     this.filteredOrderOptions = this.OrderControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterOrderByCustomer(value || '',result)),
    );

    this.filteredOrderIdOptions = this.OrderIdOptionsControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterOrderIDByCustomer(value || '',result)),
    );

 
    
    console.log(of([...new Set(this.vWebOrders?.filter(x=>x.CustomerId==result.CustomerId).map(item => item.OrderId.toString()))]))
    //this.myControl = new FormControl(this.vWebOrders?.filter(x=>x.CustomerId == event)[0].Customer)
  }

  setValueCustomerID(event:any){
    // console.log(event);
    // console.log(this.vWebOrders?.filter(x=>x.Customer == event)[0])
    var result = this.vWebOrders?.filter(x=>x.Customer == event)[0];
    this.CustomerIDControl.setValue(result.CustomerId.toString())
    this.OrderControl.setValue('')
    this.OrderIdOptionsControl.setValue('')
    // const uniqueOrderId = [...new Set(this.vWebOrders?.filter(x=>x.CustomerId==result.CustomerId).map(item => item.OrderId.toString()))];
    // const uniqueOrderName = [...new Set(this.vWebOrders?.filter(x=>x.CustomerId==result.CustomerId).map(item => item.OrderName.toString()))];
    // this.filteredOrderIdOptions = of(uniqueOrderId)
    // this.filteredOrderOptions = of(uniqueOrderName)

    //filtre des commandes
    this.filteredOrderOptions = this.OrderControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterOrderByCustomer(value || '',result)),
    );

    this.filteredOrderIdOptions = this.OrderIdOptionsControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterOrderIDByCustomer(value || '',result)),
    );
    

    //this.myControl = new FormControl(this.vWebOrders?.filter(x=>x.CustomerId == event)[0].Customer)
  }

  setValueOrder(event:any){
    // console.log(event);
    // console.log(this.vWebOrders?.filter(x=>x.OrderId == event)[0])
    console.log(event)
    var result = this.vWebOrders?.filter(x=>x.OrderId == event)[0]
    this.OrderControl.setValue(result?.OrderName.toString())
    this.CustomerIDControl.setValue(result?.CustomerId.toString())
    this.myControl.setValue(result?.Customer)
    //this.myControl = new FormControl(this.vWebOrders?.filter(x=>x.CustomerId == event)[0].Customer)
  }

  setValueOrderID(event:any){
    // console.log(event);
    // console.log(this.vWebOrders?.filter(x=>x.OrderName == event)[0])
    var result = this.vWebOrders?.filter(x=>x.OrderName == event)[0]
    this.OrderIdOptionsControl.setValue(result?.OrderId.toString())
    this.CustomerIDControl.setValue(result?.CustomerId.toString())
    this.myControl.setValue(result?.Customer)
    //this.myControl = new FormControl(this.vWebOrders?.filter(x=>x.CustomerId == event)[0].Customer)
  }

  initializeCustomer(){
    console.log("miditra")
          this.myControl.setValue('')
          this.CustomerIDControl.setValue('')

        //console.log(this.vWebOrders);
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
        //filtre des commandes
        this.filteredOrderOptions = this.OrderControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filterOrder(value || '')),
        );

        //filtre par Id du client 
        this.filteredCustomerIdOptions = this.CustomerIDControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filterCustomerID(value || '')),
        );

        //filtre par id de la Commande
        this.filteredOrderIdOptions = this.OrderIdOptionsControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filterOrderID(value || '')),
        ); 
  }

  initializeOrder(){
    console.log("miditra")
          this.OrderControl.setValue('')
          this.OrderIdOptionsControl.setValue('')

       



    
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
  { priorite: 1, commande: 'ACME', ID: 30121, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 2, commande: 'ACME', ID: 30122, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 3, commande: 'ACME', ID: 30123, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 4, commande: 'ACME', ID: 30124, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 5, commande: 'ACME', ID: 30125, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 6, commande: 'ACME', ID: 30126, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 7, commande: 'ACME', ID: 30127, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 8, commande: 'ACME', ID: 30128, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 9, commande: 'ACME', ID: 30129, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 10, commande: 'ACME', ID: 30130, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 11, commande: 'ACME', ID: 30131, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 12, commande: 'ACME', ID: 30132, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 13, commande: 'ACME', ID: 30133, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 14, commande: 'ACME', ID: 30134, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 15, commande: 'ACME', ID: 30135, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 16, commande: 'ACME', ID: 30136, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 17, commande: 'ACME', ID: 30137, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 18, commande: 'ACME', ID: 30138, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 19, commande: 'ACME', ID: 30139, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
  { priorite: 20, commande: 'ACME', ID: 30140, client: 'H', hits: 1, traitee: 1, hitsValides: 1, localisation: 'Madagascar', origine: 'Belgique', lecteur: 'Jean' },
];
