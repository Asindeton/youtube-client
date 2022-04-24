import { first } from 'rxjs';
import { ICard } from './../../../redux/actions/admin.action';
import { selectCard } from './../../../redux/selectors/card.selector';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-detailed',
  templateUrl: './card-detailed.component.html',
  styleUrls: ['./card-detailed.component.scss'],
})
export class CardDetailedComponent implements OnInit {
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    public location: Location,
    private router: Router,
    private cardService: CardService,
  ) {}

  public cardBorderColor = '';

  public itemInfo!: ICard | undefined;

  cards$ = this.store.select(selectCard).pipe(first());

  data!: ICard[];

  ngOnInit(): void {
    this.cards$.subscribe((data) => {
      this.data = data;
      this.itemInfo = this.data.find((elem) => elem.created == this.route.snapshot.params['id']);

      if (this.itemInfo !== undefined) {
        this.cardBorderColor = this.cardService.getBorderColor(this.itemInfo.created);
      } else {
        this.router.navigate(['error']);
      }
    });
  }

  back() {
    this.location.back();
  }
}
