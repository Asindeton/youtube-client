import { Injectable } from '@angular/core';

@Injectable()
export class CardService {
  private colors = {
    red: '#EB5757',
    green: '#27AE60',
    blue: '#2F80ED',
    yellow: '#F2C94C',
  };

  public getBorderColor(date: string | number | undefined): string {
    if (date == undefined) {
      return this.colors.blue;
    }
    const date1 = new Date(date).getTime();
    const date2 = new Date().getTime();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

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
