import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as data from '../../assets/base/recipes.json';
import * as categoriesData from '../../assets/base/categories.json';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  dataItems: any = [];
  displayingList: any = [];
  title = '';
  searchParam: any = null;
  listOpen = true;
  step = 1;
  category: any = '';
  displayingLength = 10;
  paginationLength = 0;
  fakeArray: any = [];
  showHomeLink = false;
  categoriesList: any = (categoriesData as any).default;
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private metaService: Meta) {
  }

  ngOnInit(): void {

    const baseUrl = window.location.protocol + '//' + window.location.hostname + '/angular-recipes/';
    const imageUrl = baseUrl + 'assets/images/recipes/recipe-ex.jpg';
    const desc = 'Here you can find good recipe'
    this.metaService.addTags([
      { property: 'og:title', content: this.title },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:description', content: desc },
      { property: 'og:image', content: imageUrl }

    ]);

    this.searchParam = this.activatedRoute.snapshot.queryParamMap.get('search')?.toLowerCase();
    if (this.searchParam === '' || this.searchParam === undefined) {
      this.searchParam = null
    }

    this.category = this.activatedRoute.snapshot.queryParamMap.get('category');

    this.getData(this.category, this.searchParam);

    this.paginationLength = Math.ceil(this.dataItems.length / this.displayingLength);
    this.fakeArray = new Array(this.paginationLength);

    this.addToList();
    document.addEventListener('click', (event: any) => {
      if (event.target.closest("#button-list") === null && event.target.closest(".ingredients-container") === null) {
        this.openList(99)
      }
    });
  }

  getData(category?: any, searchParam?: any) {
    this.title = "Recipes"
    if (category !== null) {
      this.showHomeLink = true;
      this.title = this.category.charAt(0).toLocaleUpperCase() + this.category.slice(1) + ' recepies';
    }
    console.log(category, searchParam);
    for (let item of (data as any).default) {
      if (category === null ? true : item.categories.includes(category)) {
        if (searchParam === null ? true : item.title.toLowerCase().includes(searchParam)) {
          this.dataItems.push(item);
        }
      }
    }

  }
  pagginationStep(step: number) {
    if (step === this.step || step === 0 || step === this.paginationLength + 1)
      return

    this.step = step;
    this.addToList()
    setTimeout(() => {
      window.scrollTo({
        top: Number(document.getElementById('recipes')?.offsetTop) - 40,
        behavior: 'smooth'
      });
    }, 100)

  }
  addToList() {
    this.displayingList = [];
    for (let index = ((this.step - 1) * 10); index < this.dataItems.length; index++) {

      if (index === this.step * 10)
        break

      const item = this.dataItems[index];

      item.listOpen = false;
      item.portionsDefault = item.portions;

      this.displayingList.push(item);
    }
  }
  openList(index: number) {
    for (let [indexOfItem, item] of this.displayingList.entries()) {
      if (index === indexOfItem && !item.listOpen) {
        item.listOpen = true;
      }
      else {
        item.listOpen = false;
      }
    }


  }
  changeAmount(index: number, value: number) {
    if (this.displayingList[index].portions > 1 || value > 0)
      this.displayingList[index].portions += value;
  }
  Round(value: number) {
    return Math.round(value * 100) / 100
  }
  routerNavigateParam(categoryParam: string) {
    const queryParam: any = {}
    queryParam.category = categoryParam;
    if (this.searchParam !== null)
      queryParam.search = this.searchParam;

    this.router.navigateByUrl('/recipes').then(() => {
      this.router.navigate([''], { queryParams: queryParam })
    })
  }
  routerNavigateReload() {
    this.router.navigateByUrl('/recipes').then(() => {
      this.router.navigate(['/'])
    })
  }
  routerNavigateSearchParam(searchParam?: string) {
    const queryParam: any = {}

    if (this.category !== null)
      queryParam.category = this.category;


    queryParam.search = searchParam;

    this.router.navigateByUrl('/recipes').then(() => {
      this.router.navigate([''], { queryParams: queryParam })
    })

  }
}
