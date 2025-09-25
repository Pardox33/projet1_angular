import { Router} from '@angular/router';
import { produits } from './produits/produits';
import { AddProduit } from "./add-produit/AddProduit";

export const routes: Routes = [
    { path: "produits", component : produits },
    {path: "add-produit", component : AddProduit},
    {path: "", redirectTo: "produits", pathMatch: "full"}
];
