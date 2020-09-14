import { Component } from '@angular/core';

@Component({
  selector: 'ngx-comercios-elements',
  templateUrl: 'comercios.component.html',
  styleUrls: ['comercios.component.scss']
})
export class ComerciosComponent {

    fruits: string[] = [
        'il Tano - Pizzas',
        'Pollería - Don Torcuato',
        'Heladería - Iglú'
    ];

}
