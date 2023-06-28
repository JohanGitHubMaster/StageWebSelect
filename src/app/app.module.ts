import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesComponent } from './articles/articles.component';
import {MatCardModule} from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { NgFor } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { SelectcomponentComponent } from './selectcomponent/selectcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ArticlesToValidateComponent } from './articles-to-validate/articles-to-validate.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProfilDescriptionComponent } from './profil-description/profil-description.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OtherProfilArticleComponent } from './other-profil-article/other-profil-article.component';
import {MatTabsModule} from '@angular/material/tabs';
import { Routes, RouterModule } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent
  },
  {
    path: 'article',
    component: ArticlesComponent
  },
  {
    path: 'articleToValidate',
    component: ArticlesToValidateComponent
  },
  {
    path: 'profil',
    component: ProfilDescriptionComponent
  },
  {
    path: 'otherprofil',
    component: OtherProfilArticleComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    SelectcomponentComponent,
    ArticlesToValidateComponent,
    ProfilDescriptionComponent,
    OtherProfilArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,MatFormFieldModule, MatSelectModule, NgFor, 
    MatInputModule, 
    FormsModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatToolbarModule, MatSidenavModule,MatButtonToggleModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
    RouterModule.forRoot(routes),
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
