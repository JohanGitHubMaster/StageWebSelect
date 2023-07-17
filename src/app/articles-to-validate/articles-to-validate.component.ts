import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ProfilDescriptionComponent } from '../profil-description/profil-description.component';
import { OtherProfilArticleComponent } from '../other-profil-article/other-profil-article.component';
import { ActivatedRoute, Router } from '@angular/router';
import { VarticleToValidateService } from 'src/shared/VarticleToValidate/VarticleToValidate.service';
import { VarticleToValidate } from 'src/models/VarticleToValidate.model';
import { VWebOrders } from 'src/models/VWebOrders.model';
import { VWebOrdersService } from 'src/shared/VWebOrders/VWebOrders.service';
import { VKeywordDescriptionService } from 'src/shared/VKeywordDescription/VKeywordDescription.service';
import { VKeywordDescription } from 'src/models/VKeywordDescription.model';
import { ArticleKeyword } from 'src/models/ArticleKeyword.model';
import { ArticleKeywordService } from 'src/shared/ArticleKeyword/ArticleKeyword.service';
import { ArticleExtractService } from 'src/shared/ArticleExtract/ArticleExtract.service';
import { ArticleExtract } from 'src/models/ArticleExtract.model';

@Component({
  selector: 'app-articles-to-validate',
  templateUrl: './articles-to-validate.component.html',
  styleUrls: ['./articles-to-validate.component.css'],
})
export class ArticlesToValidateComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  panelOpenState = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private dialog: MatDialog, 
              private route: ActivatedRoute,
              private router: Router,
              private varticleToValidateService:VarticleToValidateService,
              private vweborderService:VWebOrdersService,
              private vkeywordDescriptionService:VKeywordDescriptionService,
              private keywordArticleService:ArticleKeywordService,
              private articleExtractService:ArticleExtractService,
              ) {

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    
  }

  ngOnInit(){
    const orderId = this.route.snapshot.params['id'];
    this.orderid = orderId;
    this.vweborderService.getVWebOrderById(orderId).subscribe(result=>{
      // console.log(result)
      this.weborders = result;
    })
    this.varticleToValidateService.getVarticleToValidateById(0,10,orderId).subscribe(result=>{
      this.dataList = result;
    })
  }

  length = 500;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  dataList !:VarticleToValidate[];//ELEMENT_DATA.slice(this.pageIndex, this.pageSize);
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  priorityId!: number;
  orderid!:number;
  labelPosition: 'before' | 'after' = 'after';
  expandedIndex = 0;
  weborders!:VWebOrders;
  articleKeyword!:ArticleKeyword[];
  articleExtract!:ArticleExtract[];
  keywordDescription !: VKeywordDescription[];
  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    var current = (e.pageIndex) * e.pageSize;
    // this.dataList = ELEMENT_DATA.slice(current, e.pageSize + current)
    const orderId = this.route.snapshot.params['id'];

   

    this.varticleToValidateService.getVarticleToValidateById(e.pageIndex,e.pageSize,orderId).subscribe(result=>{
      this.dataList = result;
    })
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
  OtherProfil(item:VarticleToValidate) {
    this.dialog.open(OtherProfilArticleComponent, { data: item, width: '140%', height: '90%' });
  }

  showelement(item:VarticleToValidate){
    // console.log(item)
    this.keywordArticleService.getArticleKeywordById(item.ArticleSelectedId,0,10).subscribe(result=>{
      this.articleKeyword = result;
      console.log(result)
    })

    this.articleExtractService.getArticleExtractById(item.ArticleSelectedId,0,5).subscribe(result=>{
      this.articleExtract = result;
      console.log(result)
    })
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
