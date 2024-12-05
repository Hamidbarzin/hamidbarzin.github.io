import { Component } from '@angular/core';
import { SimpleDataSource } from './datasource.model';
import { Card } from './card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'higherlower';
  description = 'This is a sample card description that should be displayed!';
  cards: Card[];
  searchTerm: string = '';

  constructor() {
    const dataSource = new SimpleDataSource();
    this.cards = dataSource.getData();
  }

  filteredCards(): Card[] {
    if (!this.searchTerm) {
      return this.cards;
    }
    return this.cards.filter(card => 
      card.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      card.suit.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}