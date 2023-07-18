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
import { KeywordDescriptionService } from 'src/shared/KeywordDescription/KeywordDescription.service';
import { KeywordDescription } from 'src/models/KeywordDescription.model';

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
              private keywordDescriptionService:KeywordDescriptionService
              ) {

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    
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
  // labelPosition: 'before' | 'after' = 'after';
  expandedIndex = 0;
  weborders:VWebOrders = new VWebOrders();
  articleKeyword!:ArticleKeyword[];
  articleExtract!:ArticleExtract[];
  keywordDescription !: VKeywordDescription[];
  keywordDescriptionHtml : KeywordDescription = new KeywordDescription();
  pageEvent!: PageEvent;
  modifVarticleToValidate: VarticleToValidate[] = [];

  ngOnInit(){
    console.log("miditra  ngon init")
    const orderId = this.route.snapshot.params['id'];
    this.orderid = +orderId;
    this.vweborderService.getVWebOrderById(this.orderid).subscribe(result=>{
      // console.log(result)
      this.weborders = result;
    })
    this.varticleToValidateService.getVarticleToValidateById(0,10,this.orderid).subscribe(result=>{
      console.log( result[0].Validated)
      this.dataList = result;
      for(let i=0;i<this.dataList.length;i++){
        this.dataList[i].IsOk = this.dataList[i].Validated?true:false
        this.dataList[i].IsNotOk = this.dataList[i].Validated?false:true
      }
      console.log(this.dataList[0].IsOk)
      console.log(this.dataList[0].IsNotOk)
      this.dataList = this.dataList;
    })
  }

  handlePageEvent(e: PageEvent) {
    var current = (e.pageIndex) * e.pageSize;
    // this.dataList = ELEMENT_DATA.slice(current, e.pageSize + current)
    const orderId = +this.route.snapshot.params['id'];

   

    this.varticleToValidateService.getVarticleToValidateById(e.pageIndex,e.pageSize,orderId).subscribe(result=>{
      // console.log(result)
      this.dataList = result;
      var data:Array<VarticleToValidate> = result;
      
      for(let i = 0; i<this.modifVarticleToValidate.length;i++){
        if(data.filter(x=>x.ArticleSelectedId == this.modifVarticleToValidate[i].ArticleSelectedId).length>0){
          data.filter(x=>x.ArticleSelectedId == this.modifVarticleToValidate[i].ArticleSelectedId)[0].Validated = this.modifVarticleToValidate[i].Validated
          data.filter(x=>x.ArticleSelectedId == this.modifVarticleToValidate[i].ArticleSelectedId)[0].IsNotOk = this.modifVarticleToValidate[i].IsNotOk
          data.filter(x=>x.ArticleSelectedId == this.modifVarticleToValidate[i].ArticleSelectedId)[0].IsOk = this.modifVarticleToValidate[i].IsOk
          console.log("eto ambanini ty le value")
          
        }

      }
      console.log(data)
      this.dataList = data;
      
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
      // console.log(result)
    })

    this.articleExtractService.getArticleExtractById(item.ArticleSelectedId,0,5).subscribe(result=>{
      this.articleExtract = result;
      // console.log(result)
    })
  }

  getkeyword(KeywordSource:String){
    
    this.keywordDescriptionService.getKeywordNameByName(KeywordSource).subscribe(result=>{
      if(result!=undefined || result!=null)
      this.keywordDescriptionHtml = result
      else
      this.keywordDescriptionHtml = new KeywordDescription();
      console.log(result)
    })
  }

  GoTocutArticle(){
    console.log(this.dataList)
  }

  checkOk(item:VarticleToValidate,event:any){
    item.IsNotOk = false;
    item.IsOk = true;
    item.Validated = true;
    console.log(item.ArticleSelectedId)
    // console.log(this.dataList)
    if(this.modifVarticleToValidate.filter(x=>x.ArticleSelectedId == item.ArticleSelectedId).length<=0){
      this.modifVarticleToValidate.push(item)   
    }   
    else
    this.modifVarticleToValidate.filter(x=>x.ArticleSelectedId == item.ArticleSelectedId)[0] = item;

     console.log(this.modifVarticleToValidate)
  }

  checkNotOk(item:VarticleToValidate,event:any){
    item.IsNotOk = true;
    item.IsOk = false;
    item.Validated = false;
    // console.log(event.target.name)
    // console.log(item)
    // console.log(this.dataList)
    if(this.modifVarticleToValidate.filter(x=>x.ArticleSelectedId == item.ArticleSelectedId).length<=0){
      this.modifVarticleToValidate.push(item)   
    }   
    else
    this.modifVarticleToValidate.filter(x=>x.ArticleSelectedId == item.ArticleSelectedId)[0] = item;

    console.log(this.modifVarticleToValidate)


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
