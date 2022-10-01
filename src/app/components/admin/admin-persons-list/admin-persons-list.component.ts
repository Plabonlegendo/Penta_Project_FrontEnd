import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PersonDto } from 'src/app/models/app-dto';
import * as appActions from 'src/app/store/actions/app-actions';
import { getPersonListForAdmin } from 'src/app/store/selectors/app-selectors';


@Component({
  selector: 'app-admin-persons-list',
  templateUrl: './admin-persons-list.component.html',
  styleUrls: ['./admin-persons-list.component.css']
})
export class AdminPersonsListComponent implements OnInit {
  persons: PersonDto[] = [];

  displayedColumns = ['name', 'phoneNo', 'email', 'departmentName', 'role', 'active'];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getPersonList();
  }

  getPersonList() {
    console.log("asche");
    // debugger
    this.store.dispatch(appActions.GetPersonListForAdminRequest());
    this.store.select(getPersonListForAdmin).subscribe(data => {
      console.log(data);
      this.persons = data
    });
  }

}
