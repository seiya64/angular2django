import { Component, Input, OnInit } from '@angular/core';
import { Beacon } from '../models/beacon';
import { Fort } from '../models/fort';

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
    selector: 'fort',
    templateUrl: 'app/fort/fort.component.html'
})

export class FortComponent implements OnInit {
    @Input()
    forts: Fort[];

    ngOnInit(): void {
        this.forts = [
            {
                id: 1,
                name: 'Camaradas del metal',
                beacons: BEACONS
            }
        ];
    }

    toggleBeacon(beacon: Beacon): void {
        beacon.isBurning = !beacon.isBurning;
    };
}