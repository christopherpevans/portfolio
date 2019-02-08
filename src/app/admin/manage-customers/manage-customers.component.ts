import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.scss']
})
export class ManageCustomersComponent implements OnInit {

  constructor(private dataService: DataService) { }

  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'types', 'description', 'created_at'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit() {
    this.dataService.getCustomers()
    .subscribe(data => this.dataSource.data = data);
    this.dataSource.paginator = this.paginator;
  }

  cancel() {

  }

  save() {

  }
}
