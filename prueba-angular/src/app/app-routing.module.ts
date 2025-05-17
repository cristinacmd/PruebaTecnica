import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  
  // Redirigir a /login cuando no se especifique una ruta
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Redirigir a /login para cualquier ruta que no exista
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
