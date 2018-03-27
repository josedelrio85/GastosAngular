import { Component, OnInit, Input, HostListener } from '@angular/core';
import { SortService } from '../services/sort.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: '[sortable-column]',
  templateUrl: './sortable-column.component.html',
})
export class SortableColumnComponent implements OnInit {

  constructor(private sortService: SortService) { }

  @Input('sortable-column')
  columnName: string;

  @Input('sort-direction')
  sortDirection: string = '';

  private columnSortedSubscription: Subscription;

  @HostListener('click')
  sort(){
    // console.log("2 -> SortableColumnComponent sort");
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    //asigna las variable columnName y sortDirection a las propiedades del interfaz ColumnSortedEvent, definido en sort-service
    //este objeto/evento es asignado al sujeto observable columnSorted$
    this.sortService.columnSorted({sortColumn: this.columnName, sortDirection: this.sortDirection});
  }


  ngOnInit() {
    // subscribe to sort changes so we can react when other columns are sorted
    // console.log("SortableColumnComponent ngOnInit -> subscripcion columnSortedSubscription a observable columnSorted de sortService")
    this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event =>{
      // reset this column's sort direction to hide the sort icons
      if(this.columnName != event.sortColumn) {
        this.sortDirection = '';
      }
    });
  }

  ngOnDestroy(){
    this.columnSortedSubscription.unsubscribe();
  }

}
