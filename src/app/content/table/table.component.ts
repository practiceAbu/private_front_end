
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, OnInit, ViewChild, inject} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ApiService } from '../../services/api.service';
import { RebuttalData } from 'src/app/Model/rebuttalData';
import { CommonModule } from '@angular/common';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule, MatSortModule,CommonModule,MatFormFieldModule, MatInputModule,MatPaginatorModule]
})
export class TableComponent implements AfterViewInit, OnInit {
  dataList: RebuttalData[] | undefined;
  displayedColumns: string[] = [
    'asin',
    'workStream',
    'quarCode',
    'quarComment',
    'operCode',
    'operComment',
    'smeCode',
    'smeComment',
    'finalCode',
    'finalCodeRefComment',
    'closedAs'
  ];

  constructor(private apiService: ApiService) {
  }
  private _liveAnnouncer = inject(LiveAnnouncer);
  dataSource = new MatTableDataSource<RebuttalData>([]);

  ngOnInit(): void {
   this.apiService.getAllRequests('').subscribe({
      next: (res: any) => {
        this.dataList = res;
        this.dataSource.data = res;
        console.log(res);
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });

  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
