import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComercioService } from '../../services/comercio.service';

@Component({
  selector: 'ngx-comercios-elements',
  templateUrl: 'comercios.component.html',
  styleUrls: ['comercios.component.scss'],
  providers: [ ComercioService ]
})
export class ComerciosComponent {

    fruits: string[] = [
        'il Tano - Pizzas',
        'Pollería - Don Torcuato',
        'Heladería - Iglú'
    ];

    constructor(
      private router: Router,
      private comercioSer: ComercioService)
    {
      this.fruits = this.comercioSer.obtenerComercios();
    }

    public goToAgregar()
    {
      this.router.navigate(['/pages/agregar']);
    }

    public goToEditar()
    {
      this.router.navigate(['/pages/editar']);
    }
}
