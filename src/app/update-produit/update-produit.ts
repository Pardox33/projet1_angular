import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-produit.html',
  styles: ``
})
export class UpdateProduit implements OnInit {
  currentProduit = new Produit();
  categories! : Categorie[];
  updatedCatId! : number;
  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private produitService: ProduitService) {}
  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
    //console.log(this.activatedRoute.snapshot.params['id']);
    this.currentProduit =this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']);
    //console.log(this.currentProduit);
    this.updatedCatId! = this.currentProduit.categorie?.idCat??0;
  }
  updateProduit(){
    //console.log(this.currentProduit);
    this.currentProduit.categorie=this.produitService.consulterCategorie(this.updatedCatId);
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
}
}
