import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produits',
  imports: [CommonModule, RouterLink],
  templateUrl: './produits.html',
})

export class Produits implements OnInit {


  produits: Produit[];

  constructor(private produitService: ProduitService) {
    this.produits = this.produitService.listeProduit();
  }
  supprimerProduit(prod: Produit) {
    //console.log(prod);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.produitService.supprimerProduit(prod)
  }
  ngOnInit(): void { }
}