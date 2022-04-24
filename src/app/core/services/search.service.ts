import { CoreService } from './core.service';
import { Injectable, ElementRef } from '@angular/core';
import { debounceTime, fromEvent, tap } from 'rxjs';

@Injectable()
export class SearchService {
  constructor(private coreService: CoreService) {}

  searchWordSubscribe(input: ElementRef) {
    fromEvent(input.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        tap(() => {
          if (input.nativeElement.value.length >= 3) {
            this.coreService.setSearchWord(input.nativeElement.value);
          }
        }),
      )
      .subscribe();
  }
}
