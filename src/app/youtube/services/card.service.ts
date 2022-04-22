import { Injectable } from '@angular/core';

@Injectable()
export class CardService {
  private colors = {
    red: '#EB5757',
    green: '#27AE60',
    blue: '#2F80ED',
    yellow: '#F2C94C',
  };

  public getBorderColor(date: string): string {
    const date1 = new Date(date).getTime();
    const date2 = new Date().getTime();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // If a publication date is less than a month, set border background to green
    // If a publication date is less than 7 days, set border background to blue
    // If a publication date is more than 6 months, set border background to red

    if (diffDays / 30 > 6) {
      return this.colors.red;
    } else if (diffDays / 30 < 6 && diffDays / 30 > 1) {
      return this.colors.yellow;
    } else if (diffDays > 7 && diffDays / 30 <= 1) {
      return this.colors.green;
    } else if (diffDays <= 7) {
      return this.colors.blue;
    }
    return this.colors.blue;
  }
}
