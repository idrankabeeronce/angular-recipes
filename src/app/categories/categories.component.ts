import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/base/categories.json'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoriesList = (data as any).default;
  searchParam: any = '';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchParam = this.activatedRoute.snapshot.queryParamMap.get('search') === null ? '' : this.activatedRoute.snapshot.queryParamMap.get('search')?.toLowerCase();

    console.log(this.searchParam);

    if (this.searchParam === '')
      return

    this.categoriesList = [];
    for (let item of (data as any).default) {
      if (item.includes(this.searchParam) ) {
        this.categoriesList.push(item);
      }
    }

  }

}
