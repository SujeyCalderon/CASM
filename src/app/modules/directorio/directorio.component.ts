import { Component } from '@angular/core';
import { HeaderFeedComponent } from '../../componets/header-feed/header-feed.component';
import { FooterComponent } from '../../componets/footer/footer.component';
import { HeadComponent } from '../../componets/head/head.component';
import { DirectorioCardComponent } from '../../componets/directorio-card/directorio-card.component';
import { HeadDirectComponent } from "../../componets/head-direct/head-direct.component";

@Component({
  selector: 'app-directorio',
  standalone: true,
  imports: [HeaderFeedComponent, FooterComponent, HeadComponent, DirectorioCardComponent, HeadDirectComponent],
  templateUrl: './directorio.component.html',
  styleUrl: './directorio.component.scss'
})
export class directorioComponent {

}