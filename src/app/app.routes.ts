import { Routes } from '@angular/router';
import { Produits } from './produits/produits';
import { AddProduit } from './add-produit/add-produit';
import { UpdateProduit } from './update-produit/update-produit';
import { RechercheParCategorie } from './recherche-par-categorie/recherche-par-categorie';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';


const routes: Routes = [
    { path: "produits", component: Produits },
    { path: "add-produit", component: AddProduit },
    { path: "update-produit/:id", component: UpdateProduit },
    {path: "rechercheParCategorie", component : RechercheParCategorie},
    {path: "rechercheParNom", component : RechercheParNom},
    { path: "", redirectTo: "produits", pathMatch: "full" }
]; export default routes;