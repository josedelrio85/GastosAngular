import { Directive, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { SortService } from './services/sort.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[sortable-table]'
})
export class SortableTableDirective implements OnInit, OnDestroy{

  constructor(private sortService: SortService) { }

  @Output()
  sorted = new EventEmitter();

  private columnSortedSubscription: Subscription;

  ngOnInit(){
    // console.log("1 -> Inicio directive SortableTable");
    //se suscribe columnSortedSubscription al observable columnSorted de sort-service, para recibir el contenido del objeto/evento ColumnSortedEvent
    //que está siendo emitido (por el código de sortable-column-component -> service -> sortable-table-directive )
    this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
      // console.log("4 -> Se recibe el evento emitido por sortService.columnSorted$ y se asigna a sorted (output) para que pueda ser usada en GastosComponent ");
      this.sorted.emit(event);
    });
  }

  ngOnDestroy(){
    this.columnSortedSubscription.unsubscribe();
  }
}
