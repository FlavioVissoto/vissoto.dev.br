import { Component, OnInit } from '@angular/core';

import { SolidColor } from '../../interfaces/styles/solid-color';
import { ButtonServices } from '../../services/styles/solid-colors.service';
import { Response } from './../../interfaces/response/respose';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  constructor(private solidColorsServices: ButtonServices) {}

  solidColors: SolidColor[] = [];

  ngOnInit(): void {
    this.getSolidColors();
  }

  getSolidColors(): void {
    this.solidColorsServices.getSolidColors().subscribe({
      next: (x: Response<SolidColor[]>) => {
        this.solidColors = x.data;
      },
    });
  }
}
