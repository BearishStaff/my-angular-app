import { Component, EventEmitter, Output } from '@angular/core';
import { auditTime, debounceTime } from 'rxjs';

@Component({
  selector: 'app-shopping-search',
  templateUrl: './shopping-search.component.html',
  styleUrl: './shopping-search.component.css'
})
export class ShoppingSearchComponent {
  @Output() onInput = new EventEmitter<string>();
  @Output() onSearch = this.onInput.pipe(auditTime(500));

  inputSearch(text: string){
    this.onInput.emit(text);
  }
}
