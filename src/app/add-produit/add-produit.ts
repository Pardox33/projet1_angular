import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-produit.html',
  styles: ``
})
export class AddProduit implements OnInit {
  newProduit = new Produit();
  categories! : Categorie[];
  newCategorie! : Categorie;
  newIdCat! : number;
  //message!: string;

  constructor(private produitService: ProduitService, private router : Router) { }
  ngOnInit(): void {
    this.categories=this.produitService.listeCategories();
  }
  AddProduit() {
    this.newCategorie =
    this.produitService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie = this.newCategorie;

    //console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    //this.message = "Produit " + this.newProduit.nomProduit + " ajouté avec succès";
    this.router.navigate(['produits']);
  }
}