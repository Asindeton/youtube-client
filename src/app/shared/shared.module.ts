import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortNumberPipe } from './pipes/short-number/short-number.pipe';
import { WordSortingPipe } from './pipes/word-sorting/word-sorting.pipe';

@NgModule({
  declarations: [ShortNumberPipe, WordSortingPipe],
  imports: [CommonModule],
  exports: [ShortNumberPipe, WordSortingPipe],
})
export class SharedModule {}
