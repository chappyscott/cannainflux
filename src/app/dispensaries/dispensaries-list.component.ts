import { Component, OnInit } from '@angular/core';

import { Dispensary } from './dispensaries';
import { DispensariesService } from './dispensaries-service';

@Component({
  templateUrl: './dispensaries-list.component.html',
  styleUrls: ['./dispensaries-list.component.css'],
})
export class DispensariesListComponent implements OnInit {
  pageTitle = 'Dispensaries';
  imageWidth = 50;
  imageMargin = 2;
  showImage = true;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredDispensaries = this.listFilter ? this.performFilter(this.listFilter) : this.dispensaries;
  }

  filteredDispensaries: Dispensary[] = [];
  dispensaries: Dispensary[] = [];

  constructor(private dispensaryService: DispensariesService) {}

  performFilter(filterBy: string): Dispensary[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.dispensaries.filter(
      (dispensary: Dispensary) => dispensary.dispensaryName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.dispensaryService.getDispensaries().subscribe({
      next: (dispensaries) => {
        this.dispensaries = dispensaries;
        this.filteredDispensaries = this.dispensaries;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
