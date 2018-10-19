import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from '../componentes/sign-in/sign-in.component';

const MiRuteo = [
	{path: '' , component: SignInComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RutasModule { }