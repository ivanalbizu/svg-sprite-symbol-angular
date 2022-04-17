import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
  @Input() id = '';
  @Input() width = '40px';
  @Input() height = '40px';
  @Input() color = '#414141';

  constructor() { }

  ngOnInit(): void {
  }

}
