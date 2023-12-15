import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  temperature: number = 16;
  city: string = 'Recife';
  time: string = '18:36'
  date: string = 'Terça, 23 de Agosto'
}
