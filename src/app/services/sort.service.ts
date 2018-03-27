import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SortService {

  constructor() { }

  private columnSortedSource = new Subject<ColumnSortedEvent>();

  columnSorted$ = this.columnSortedSource.asObservable();

  columnSorted(event: ColumnSortedEvent) {
    // console.log("3 -> SortService -> ColumnSorted ");
    // console.log(event);
    this.columnSortedSource.next(event);
  }
}

export interface ColumnSortedEvent {
  sortColumn: string;
  sortDirection: string;
}