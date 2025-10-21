import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { SearchFilterPipe } from '../search-filter-pipe';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule, CommonModule,SearchFilterPipe],//
  templateUrl: './recherche-par-nom.html',
  styles: ``
})

export class RechercheParNom implements OnInit {
  produits!: Produit[];
  nomProduit!: string;
  allProduits!: Produit[];
  searchTerm!:string;

  constructor(private produitService: ProduitService) { }


ngOnInit(): void {
  this.produits = this.produitService.listeProduit();
  this.allProduits = this.produits;
}


  rechercherProds(): void {
    if (this.nomProduit && this.nomProduit.trim() !== '') {
      this.produits = this.produitService.rechercherParNom(this.nomProduit);
    } else {
      alert("Veuillez saisir un nom de produit à rechercher!!!");
      this.produits = this.produitService.listeProduit();
    }
  }


  onKeyUp(filterText: string) {
    this.produits = this.allProduits.filter(item =>
      item.nomProduit.toLowerCase().includes(filterText));
  }

}
