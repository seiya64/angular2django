import { Component, Input } from '@angular/core';
import { Beacon } from '../models/beacon';
import { Fort } from '../models/fort';

@Component({
    selector: 'fort',
    templateUrl: 'app/fort/fort.component.html'
})

export class FortComponent {
    @Input()
    forts: Fort[];

    toggleBeacon(beacon: Beacon): void {
        beacon.isBurning = !beacon.isBurning;
    };
}