import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input('isFavorite') isSelected: boolean;
  @Output('change') change = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected});
  }

}

export interface isFavoriteChangeArgs{
  newValue: boolean;
}
