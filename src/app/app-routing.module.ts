import { ImageComponent } from './kandidater/kandidat/image/image.component';
import { KandidaterComponent } from './kandidater/kandidater.component';
import { RollerComponent } from './roller/roller.component';
import { BrukereComponent } from './brukere/brukere.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [
  // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'brukere', component: BrukereComponent },
  { path: 'roller', component: RollerComponent },
  { path: 'kandidater', component: KandidaterComponent },
  { path: 'image', component: ImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
