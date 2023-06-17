import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Yanova';
  show = false;
  name = 'Yanova';

  result = 0;

  nbr1 = 0;
  nbr2 = 0;

  addition() {
  	this.result = this.nbr1 + this.nbr2;
  }
  soustraction() {
  	this.result = this.nbr1 - this.nbr2;
  }
  multiplication() {
  	this.result = this.nbr1 * this.nbr2;
  }
  division() {
  	this.result = this.nbr1 / this.nbr2;
  }

  //constructor() {
  //	setTimeout( () =>{
  //	this.show = true;
  //}, 5000);
 //}
 // afficher() {
//		console.log("Bonne liaison par évènement !");
//	}
}

