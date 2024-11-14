import { Routes } from '@angular/router';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { Component2Component } from './component2/component2.component';

export const routes: Routes = [
    { path: 'first-component', component: NewcomponentComponent },
    { path: 'second-component', component: Component2Component },
];
