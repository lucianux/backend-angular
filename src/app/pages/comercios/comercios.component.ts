import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private router: Router) { }

    public goToAgregar()
    {
      this.router.navigate(['/pages/agregar']);
    }

    public goToEditar()
    {
      this.router.navigate(['/pages/editar']);
    }

}
