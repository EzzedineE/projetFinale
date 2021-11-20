import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './gardes/admin.guard';
import { GardeGuard } from './gardes/garde.guard';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModifierComponent } from './modifier/modifier.component';
import { QuizzComponent } from './quizz/quizz.component';
import { RegisterComponent } from './register/register.component';
import { ResultatComponent } from './resultat/resultat.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'quizz',
    component: QuizzComponent,
    canActivate: [GardeGuard, AdminGuard],
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [GardeGuard],
  },
  {
    path: 'gestion',
    component: GestionUtilisateurComponent,
    canActivate: [GardeGuard, AdminGuard],
  },
  {
    path: 'modifier/:id',
    component: ModifierComponent,
    canActivate: [GardeGuard, AdminGuard],
  },
  {
    path: 'add',
    component: ModifierComponent,
    canActivate: [GardeGuard, AdminGuard],
  },
  {
    path: 'resultat',
    component: ResultatComponent,
    canActivate: [GardeGuard, AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
