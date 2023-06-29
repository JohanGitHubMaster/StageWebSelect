import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ProfilDescriptionComponent } from '../profil-description/profil-description.component';
import { OtherProfilArticleComponent } from '../other-profil-article/other-profil-article.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-articles-to-validate',
  templateUrl: './articles-to-validate.component.html',
  styleUrls: ['./articles-to-validate.component.css'],
})
export class ArticlesToValidateComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  panelOpenState = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private dialog: MatDialog, private route: ActivatedRoute,
    private router: Router) {

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
  }

  length = 500;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  dataList = ELEMENT_DATA.slice(this.pageIndex, this.pageSize);
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  priorityId!: number;
  labelPosition: 'before' | 'after' = 'after';
  expandedIndex = 0;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    var current = (e.pageIndex) * e.pageSize;
    this.dataList = ELEMENT_DATA.slice(current, e.pageSize + current)
    this.pageEvent = e;
    this.length = ELEMENT_DATA.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  SelectedRows() {
    this.dialog.open(ProfilDescriptionComponent, {
      data: "toys.gif", width: '120%',
      height: '90%'
    });

  }
  OtherProfil() {
    this.dialog.open(OtherProfilArticleComponent, { data: "toys.gif", width: '140%', height: '90%' });
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
