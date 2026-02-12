import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Table } from '../interfaces/table.interface';
import { TablesData } from '../tablesData';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  getTerraceTables(): Observable<Table[]> {
    const terraceTables = TablesData.filter(
      (table) => table.position === 'terrace',
    );

    return of(terraceTables);
  }

  getFirstFloorTables(): Observable<Table[]> {
    const floorTables = TablesData.filter(
      (table) => table.position === 'first',
    );

    return of(floorTables);
  }

  getSecondFloorTables(): Observable<Table[]> {
    const secondTables = TablesData.filter(
      (table) => table.position === 'second',
    );

    return of(secondTables);
  }
}
