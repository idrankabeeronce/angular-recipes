import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoriesList = [] as Array<string>;
  loading = true;
  categorySub!: Subscription;

  searchParam: any = '';
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.searchParam = this.activatedRoute.snapshot.queryParamMap.get('search') === null ? '' : this.activatedRoute.snapshot.queryParamMap.get('search')?.toLowerCase();

    this.categorySub = this.postService.getCategories(this.searchParam).subscribe({
      next: (data) => {
        for (let category of data) {
          this.categoriesList.push(category.title);
        }
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      }
    });

  }

  ngOnDestroy(): void {
    this.categorySub.unsubscribe();
  }
}
