import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-recherche-par-categorie',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './recherche-par-categorie.html',
  styles: ``
})
export class RechercheParCategorie implements OnInit {
  produits!:Produit[];
  categories!:Categorie[];
  idCategorie!:number;

  constructor(private produitService: ProduitService) {} 

  ngOnInit(): void {
    this.categories=this.produitService.listeCategories();
    this.produits=this.produitService.listeProduit();
  }
  onChange(){
    console.log(this.idCategorie)
    this.produits=this.produitService.rechercherParCategorie(this.idCategorie);
  }
  supprimerProduit(prod: Produit) {
    //console.log(prod);
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
      this.produitService.supprimerProduit(prod)
      this.produits=this.produitService.rechercherParCategorie(this.idCategorie);
    }
  }
}
