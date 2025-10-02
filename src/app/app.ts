import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
//import { Produits } from "./produits/produits";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet ],//Produits
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MesProduits');
}
