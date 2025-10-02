import { Routes } from '@angular/router';
import { Produits } from './produits/produits';
import { AddProduit } from './add-produit/add-produit';
import { UpdateProduit } from './update-produit/update-produit';


const routes: Routes = [
    { path: "produits", component: Produits },
    { path: "add-produit", component: AddProduit },
    { path: "update-produit/:id", component: UpdateProduit },
    { path: "", redirectTo: "produits", pathMatch: "full" }
]; export default routes;

