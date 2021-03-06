import { ICard } from './../../../redux/actions/admin.action';
import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  constructor(private cardService: CardService) {}

  @Input() public card!: ICard;

  public cardBorderColor = '';

  ngOnInit(): void {
    this.cardBorderColor = this.cardService.getBorderColor(this.card.created);
  }
}
