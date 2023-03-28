import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as data from '../../assets/base/recipes.json';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  dataItems: any = [];
  displayingList: any = [];
  title = '';
  listOpen = true;
  step = 1;
  category: any = '';
  displayingLength = 10;
  paginationLength = 0;
  fakeArray: any = [];
  showHomeLink = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const category = this.activatedRoute.snapshot.queryParamMap.get('category');
    if (category !== null) {
      this.getDataByCategory(category);
      this.showHomeLink = true;
      this.title = category.charAt(0).toLocaleUpperCase() + category.slice(1) + ' recepies';
    }
    else {
      this.dataItems = (data as any).default;
      this.title = "Recipes"
    }
    this.paginationLength = Math.ceil(this.dataItems.length / this.displayingLength);
    this.fakeArray = new Array(this.paginationLength);

    this.addToList();
    document.addEventListener('click', (event: any) => {
      if (event.target.closest("#button-list") === null && event.target.closest(".ingredients-container") === null) {
        this.openList(99)
      }
    });
  }

  getDataByCategory(category: any) {
    for (let item of (data as any).default) {
      if (item.categories.includes(category))
        this.dataItems.push(item);
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
  routerNavigateParam(param: string) {
    this.router.navigateByUrl('/recipe').then(() => {
      this.router.navigate([''], { queryParams: { category: param } })
    })
  }
  routerNavigateReload() {
    this.router.navigateByUrl('/recipe').then(()=>{
      this.router.navigate(['/'])
    })
  }
}
