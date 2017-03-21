import { Component } from '@angular/core';

import { Beacon } from './models/beacon';
import { Fort } from './models/fort';

const BEACONS: Beacon[] = [
    {
        id: 1,
        name: 'Pepito',
        isBurning: true
    },
    {
        id: 1,
        name: 'Juaninito',
        isBurning: false
    },
    {
        id: 1,
        name: 'Jaimito',
        isBurning: false
    }
];

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    title = 'Almenaras';
    forts: Fort[] = [
        {
            id: 1,
            name: 'Camaradas del metal',
            beacons: BEACONS
        }
    ];
}