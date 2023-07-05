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
  Source: string;
  Date: Date;
  Titre: string;
  Mots: string;
  Langue: string;
  Pays:string;
  Auteur:string;
  Selectionne:Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Source: 'www.autoportnews.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: '75',Langue: 'NEERLANDAIS', Pays :'BELGIQUE', Auteur:'Voorberg Al',Selectionne:new Date() },
  { Source: 'www.dbnet.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: '40',Langue: 'FRANCAIS', Pays :'BELGIQUE', Auteur:'Businaro Mano',Selectionne:new Date() },
  { Source: 'www.autoportnews.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: '80',Langue: 'NEERLANDAIS', Pays :'BELGIQUE', Auteur:'Voorberg Al',Selectionne:new Date() },
  { Source: 'www.dbnet.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: '47',Langue: 'FRANCAIS', Pays :'BELGIQUE', Auteur:'Businaro Mano',Selectionne:new Date() },
  { Source: 'www.autoportnews.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: 'H',Langue: 'NEERLANDAIS', Pays :'BELGIQUE', Auteur:'Voorberg Al',Selectionne:new Date() },
  { Source: 'www.dbnet.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: '75',Langue: 'FRANCAIS', Pays :'BELGIQUE', Auteur:'Businaro Mano',Selectionne:new Date() },
  { Source: 'www.autoportnews.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: 'H',Langue: 'NEERLANDAIS', Pays :'BELGIQUE', Auteur:'Voorberg Al',Selectionne:new Date() },
  { Source: 'www.dbnet.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: '90',Langue: 'FRANCAIS', Pays :'BELGIQUE', Auteur:'Businaro Mano',Selectionne:new Date() },
  { Source: 'www.autoportnews.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: 'H',Langue: 'NEERLANDAIS', Pays :'BELGIQUE', Auteur:'Voorberg Al',Selectionne:new Date() },
  { Source: 'www.dbnet.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: '100',Langue: 'FRANCAIS', Pays :'BELGIQUE', Auteur:'Businaro Mano',Selectionne:new Date() },
  { Source: 'www.autoportnews.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: '140',Langue: 'NEERLANDAIS', Pays :'BELGIQUE', Auteur:'Voorberg Al',Selectionne:new Date() },
  { Source: 'www.dbnet.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: '20',Langue: 'FRANCAIS', Pays :'BELGIQUE', Auteur:'Businaro Mano',Selectionne:new Date() },
  { Source: 'www.autoportnews.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: '40',Langue: 'NEERLANDAIS', Pays :'BELGIQUE', Auteur:'Voorberg Al',Selectionne:new Date() },
  { Source: 'www.dbnet.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: '74',Langue: 'FRANCAIS', Pays :'BELGIQUE', Auteur:'Businaro Mano',Selectionne:new Date() },
  { Source: 'www.autoportnews.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: '56',Langue: 'NEERLANDAIS', Pays :'BELGIQUE', Auteur:'Voorberg Al',Selectionne:new Date() },
  { Source: 'www.dbnet.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: '10',Langue: 'FRANCAIS', Pays :'BELGIQUE', Auteur:'Businaro Mano',Selectionne:new Date() },
  { Source: 'www.autoportnews.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: '12',Langue: 'NEERLANDAIS', Pays :'BELGIQUE', Auteur:'Voorberg Al',Selectionne:new Date() },
  { Source: 'www.dbnet.be', Date: new Date(), Titre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Mots: '11',Langue: 'FRANCAIS', Pays :'BELGIQUE', Auteur:'Businaro Mano',Selectionne:new Date() },
];
