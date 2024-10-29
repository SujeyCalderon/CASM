import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-directorio-card',
  standalone: true,
  templateUrl: './directorio-card.component.html',
  styleUrls: ['./directorio-card.component.scss']
})
export class DirectorioCardComponent {
  @Input() photo_profile: string = '';
  @Input() user_name: string = '';
  @Input() description: string = '';
}
