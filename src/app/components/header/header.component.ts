import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  myAge(): number {
    const birthday: Date = new Date('1999-12-14');
    const today: Date = new Date();

    let age: number = today.getFullYear() - birthday.getFullYear();

    if (today.getMonth() < birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())) {
      age--;
    }

    return age;
  }
  collegePeriod(): string {
    const startedCollege: Date = new Date('2022-01-01');
    const today: Date = new Date();
    const endCollege: Date = new Date('2025-07-15');

    let aux;

    let period: number = 1;
    if (today < endCollege) {
      aux = today.getFullYear() - startedCollege.getFullYear();
      for (aux; aux >= 0; aux--) {
        period += 1;
      }

      aux = today.getMonth() - startedCollege.getMonth();
      if (aux <= 7) {
        period++;
      }

      return `student in the ${period}th period of Information Systems at UNA`;
    } else {
      return "I have a degree in Information System from UNA"
    }
  }
}
