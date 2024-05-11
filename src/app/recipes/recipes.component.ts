import { query } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';
import { RecipesGetListParams } from '../interfaces/recipesGetListParams';
import { RecipeListItem } from '../interfaces/recipeListItem';
import { GetRecipesData } from '../interfaces/getRecipesData';
import { CategoriesGetListParams } from '../interfaces/categoriesGetListParams';
import { PopupService } from '../services/popup.service';

interface extRecipeListItem extends RecipeListItem {
  listOpen: boolean
}
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  private categorySub: Subscription = Subscription.EMPTY;
  private limitCategoryList = 10;

  showMoreCategories = false;
  showHomeLink = false;

  loading = true;
  catLoading = true;

  title: string = '';

  category: string = '';
  searchParam: string = '';

  categoriesList = [] as Array<string>;
  displayingList = [] as Array<extRecipeListItem>;

  listOpen = true;
  step: number = 1;
  paginationLength = 0;
  fakeArray: any = [];

  currentUser: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private metaService: Meta,
    private postService: PostService,
    private popupService: PopupService
  ) { 
    this.currentUser = false;
  }

  ngOnInit(): void {    
    const baseUrl = window.location.protocol + '//' + window.location.hostname + '/angular-recipes/';
    const imageUrl = baseUrl + 'assets/images/recipes/recipe-ex.jpg';
    const desc = 'Here you can find good recipe';

    this.metaService.addTags([
      { property: 'og:title', content: this.title },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:description', content: desc },
      { property: 'og:image', content: imageUrl }

    ]);

    this.searchParam = this.activatedRoute.snapshot.queryParamMap.get('search')?.toLowerCase()
      ?? '';

    this.category = this.activatedRoute.snapshot.queryParamMap.get('category') ?? '';

    if (this.category) {
      this.catLoading = false;
      this.showHomeLink = true;
      this.title = this.category.charAt(0).toLocaleUpperCase() + this.category.slice(1) + ' recepies';
    } else {
      this.title = "Recipes";
      this.catLoading = true;
      const categoriesDataArg: CategoriesGetListParams = {
        searchParam: this.searchParam, 
        limit: this.limitCategoryList
      }
      this.categorySub = this.postService.getCategories(categoriesDataArg).subscribe({
        next: (data) => {          
          for (let category of data) {
            this.categoriesList.push(category.title);
          }
          if (this.categoriesList.length === this.limitCategoryList) this.showMoreCategories = true;
          this.catLoading = false;
        },
        error: (err) => {
          console.log(err);
          this.catLoading = false;
        }
      });
    }

    this.updateList();
    document.addEventListener('click', (event: Event) => {      
      if ((event.target as HTMLElement).closest(".ingredients-label") === null && (event.target as HTMLElement).closest(".ingredients-container") === null) {
        this.openList(99)
      }
    });
  }

  ngOnDestrot() {
    this.categorySub.unsubscribe();
  }
  paginationStep(step: number) {
    if (step === this.step || step === 0 || step === this.paginationLength + 1)
      return

    this.step = step;
    this.loading = true;
    this.updateList();

    const headerContainer = document.querySelector('.header .header-container');
    let headerOffset = headerContainer ? headerContainer.clientHeight : 24;
    setTimeout(() => {
      window.scrollTo({
        top: Number(document.getElementById('recipes')?.offsetTop) - (headerOffset + 24),
        behavior: 'smooth'
      });
    }, 100)
  }

  updateList() {
    this.displayingList = [];
    this.paginationLength = 0;
    this.fakeArray = [];

    const dataArgs: RecipesGetListParams = {
      category: this.category?.toLowerCase() ?? '',
      searchParam: this.searchParam ?? '',
      step: this.step,
    }

    this.postService.getRecipes(dataArgs).subscribe({
      next: (data: GetRecipesData) => {        
        if (data['list']) {
          for (let item of data.list as Array<extRecipeListItem>) {
            item.listOpen = false;           
            this.displayingList.push(item);
          }          
          this.paginationLength = data['pagingationLength'] ?? 0;
          
          this.fakeArray = new Array(this.paginationLength);
          
        }
        this.loading = false;
      },
      error: (err:any) => {
        console.log(err);
        this.loading = false;
      }
    });
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

  triggerSaveHandler():void {
    if (!this.currentUser)
      this.popupService.openAuth();
  }

  changeAmount(index: number, value: number) {
    if (this.displayingList[index].portions > 1 || value > 0)
      this.displayingList[index].portions += value;
  }

  Round(value: number) {
    return Math.round(value * 100) / 100
  }

  routerNavigateReload() {
    this.router.navigateByUrl('/recipes').then(() => {
      this.router.navigate(['/'])
    })
  }

  routerNavigateSearchParam(searchParam?: string) {
    const queryParam: any = {}

    if (this.category)
      queryParam.category = this.category;


    queryParam.search = searchParam;

    this.router.navigateByUrl('/recipes').then(() => {
      this.router.navigate([''], { queryParams: queryParam })
    })

  }

  routerNavigateParam(categoryParam: string) {
    const queryParam: any = {}
    queryParam.category = categoryParam;
    if (this.searchParam)
      queryParam.search = this.searchParam;

    this.router.navigateByUrl('/recipes').then(() => {
      this.router.navigate([''], { queryParams: queryParam })
    })
  }

}