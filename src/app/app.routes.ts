import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {BookmarksListComponent} from './bookmarks-list/bookmarks-list.component';

const AppRoutes:Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'bookmarks', component: BookmarksListComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'about', component: AboutComponent}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(AppRoutes);
