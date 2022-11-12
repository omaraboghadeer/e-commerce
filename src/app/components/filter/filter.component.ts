import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filter: any;
  @Output() onSelectFilter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    
  }

  onChange(ev: any) {
    this.onSelectFilter.emit(ev.target.value)
  }

}
