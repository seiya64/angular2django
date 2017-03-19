import { Component } from '@angular/core';

export class Fort {
    id: number;
    name: string;
    beacons: Array<Beacon>;
}

export class Beacon {
    id: number;
    name: string;
    isBurning: boolean;
}

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
    toggleBeacon(beacon: Beacon): void {
        beacon.isBurning = !beacon.isBurning;
    };
}