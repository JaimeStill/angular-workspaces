import {
  Component,
  Input
} from '@angular/core';

import { Person } from '../../models';

@Component({
  selector: 'person-card',
  templateUrl: 'person-card.component.html',
  styleUrls: ['person-card.component.scss']
})
export class PersonCardComponent {
  @Input() person: Person;
  @Input() width = 420;
  @Input() bdFilters = 'blur(30px) brightness(1.8)';
  @Input() bdHover = 'blur(30px) brightness(1.8)';

  getTitle = () => this.person.middle
    ? `${this.person.rank} ${this.person.last}, ${this.person.first} ${this.person.middle[0]}.`
    : `${this.person.rank} ${this.person.last}, ${this.person.first}`
}
