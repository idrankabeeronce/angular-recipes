import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import * as dataCategories from '../../../assets/base/categories.json'
import { Title } from '@angular/platform-browser';
import { PreviewArticleService } from 'src/app/preview-article.service';
@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {
  firstCompleted = false;
  secondCompleted = false;
  addNewCategory = false;
  addNewIngredient = false;
  invalidIngredients = false;

  onAttempt = false;
  preview = false;
  firstStep = new BehaviorSubject<boolean>(this.firstCompleted);
  secondStep = new BehaviorSubject<boolean>(this.secondCompleted);
  sub!: Subscription;
  categoryList = (dataCategories as any).default;
  firstForm = new FormGroup({
    title: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required)
  })
  secondForm = new FormGroup({
    categories: new FormControl({ data: [] } as any),
    ingredients: new FormControl({ data: [] } as any),
    portions: new FormControl('', [Validators.required, Validators.min(1)]),
    timeToDo: new FormControl('', Validators.required)
  })


  nameIngredient = new FormControl('', Validators.required);

  amountIngredient = new FormControl('', Validators.required);

  suffixIngredient = new FormControl('', Validators.required);


  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private titleService: Title, private previewArticle: PreviewArticleService) { }

  ngOnInit(): void {

    console.log(this.firstForm);

    document.body.style.setProperty('overflow', 'hidden');
    this.sub = this.getFirstStep().subscribe((res) => {
      this.firstCompleted = res;
    })
    this.sub = this.getSecondStep().subscribe((res) => {
      this.secondCompleted = res;
      if (res)
        document.body.style.setProperty('overflow', 'auto');
    })
  }
  getFirstStep(): Observable<any> {
    return this.firstStep.asObservable()
  }

  setFirstStep(value: boolean) {
    if (this.firstForm.valid)
      this.firstStep.next(value);
    else
      this.firstForm.markAllAsTouched()
  }

  getSecondStep(): Observable<any> {
    return this.secondStep.asObservable()
  }

  setSecondStep(value: boolean) {
    let error = false;

    if (this.secondForm.controls.categories.value.data.length === 0) {
      this.onAttempt = true;
      if (this.secondForm.controls.ingredients.value.data.length === 0) {
        this.nameIngredient.markAsTouched();
        this.amountIngredient.markAsTouched();
        this.suffixIngredient.markAsTouched();
      }
      this.secondForm.markAllAsTouched();
      error = true;
    }
    if (this.secondForm.controls.ingredients.value.data.length === 0) {
      this.nameIngredient.markAsTouched();
      this.amountIngredient.markAsTouched();
      this.suffixIngredient.markAsTouched();
      this.secondForm.markAllAsTouched();
      error = true;
    }
    if (this.secondForm.valid && !error)
      this.secondStep.next(value);
    else {
      this.secondForm.markAllAsTouched();
    }

  }

  firstStepCompleted() {
    this.firstCompleted = true;
  }

  cancel() {
    document.body.style.setProperty('overflow', 'auto');
    const url = String(this.activatedRoute.snapshot.queryParamMap.get('returnURL')) === 'null' ? '/' : String(this.activatedRoute.snapshot.queryParamMap.get('returnURL'));
    this.router.navigateByUrl(url)
  }

  stepBack() {
    this.setFirstStep(false);
  }

  addCategory(value: any) {
    this.categoryList.splice([this.categoryList.indexOf(value)], 1);
    this.secondForm.value.categories?.data.push(value);
    this.onAttempt = false;
    if (this.categoryList.length === 0) {
      this.addNewCategory = false;
    }
  }

  removeCategory(index: number) {
    this.categoryList.push(this.secondForm.value.categories.data[index]);
    this.secondForm.value.categories.data.splice(index, 1);
  }

  addIngredients() {
    if (!this.nameIngredient.valid || !this.amountIngredient.valid || !this.suffixIngredient.valid)
      return

    const value = { name: this.nameIngredient.value, amount: this.amountIngredient.value, suffix: this.suffixIngredient.value };
    this.secondForm.value.ingredients?.data.push(value);
    this.nameIngredient.setValue('');
    this.amountIngredient.setValue(null);
    this.suffixIngredient.setValue('');

    this.nameIngredient.markAsUntouched();
    this.amountIngredient.markAsUntouched();
    this.suffixIngredient.markAsUntouched();
  }
  removeIngredients(index: number) {
    this.secondForm.value.ingredients.data.splice(index, 1);
  }
  validateIngrefients(nameInput: any, amountInput: any, suffixInput: any) {
    nameInput.classList.remove('ng-invalid', 'ng-touched');
    amountInput.classList.remove('ng-invalid', 'ng-touched');
    suffixInput.classList.remove('ng-invalid', 'ng-touched');
    let err = false;

    if (nameInput.value === '') {
      err = true;
      nameInput.classList.add('ng-invalid', 'ng-touched');
    }

    if (amountInput.value === '') {
      err = true;
      amountInput.classList.add('ng-invalid', 'ng-touched');
    }

    if (suffixInput.value === '') {
      err = true;
      suffixInput.classList.add('ng-invalid', 'ng-touched');
    }

    return err
  }
  showPreview(bool: boolean) {


    console.log();

    const item = {
      header: {
        title: this.firstForm.value.title,
        author: {
          name: this.firstForm.value.author,
          img: "assets/images/profiles/person.jpg"
        },
        id: 15,
        likes: 0,
        dislikes: 0,
        saved: 0,
        imgSrc: "assets/images/recipes/recipe-ex.jpg",
        categories: this.secondForm.value.categories.data,
        difficulty: 1,
        ingredients: this.secondForm.value.ingredients.data,
        portions: this.secondForm.value.portions,
        portionsDefault: this.secondForm.value.portions,
        timeToDo: {
          hours: Number(this.secondForm.value.timeToDo?.slice(0, 2)),
          minutes: Number(this.secondForm.value.timeToDo?.slice(3, 5)),
        },
        desc: this.firstForm.value.desc,
        ref: "article-15"
      },
      id: 15,
      title: this.firstForm.value.title,
      ref: "article-15",
      body: {
        galery: {
          videoSrc: "assets/videos/recipes/video.mp4",
          imagesSrc: [
            "assets/images/recipes/recipe-ex.jpg",
            "assets/images/recipes/recipe-ex.jpg",
            "assets/images/recipes/recipe-ex.jpg",
            "assets/images/recipes/recipe-ex.jpg",
            "assets/images/recipes/recipe-ex.jpg",
            "assets/images/recipes/recipe-ex.jpg"
          ]
        },
        nutritions: {
          energy: 521,
          protein: 12,
          fat: 32,
          carbohydrate: 68
        },
        instructions: [
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.",
            imageSrc: "assets/images/recipes/recipe-ex.jpg"
          }, {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.",
            imageSrc: ""
          }, {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.",
            imageSrc: "assets/images/recipes/recipe-ex.jpg"
          }, {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.",
            imageSrc: "assets/images/recipes/recipe-ex.jpg"
          }, {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.",
            imageSrc: ""
          }
        ],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.",
        advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus."
      }
    }
    if (bool) {
      this.previewArticle.setPreviewItem(item);
      document.body.style.setProperty('overflow', 'hidden');
      this.titleService.setTitle('Preview | Recipes');
    }
    else {
      document.body.style.setProperty('overflow', 'auto');
      this.titleService.setTitle('New recipe | Recipes');
    }
    this.preview = bool;
  }

  saveRecipe() {

  }
  showCategoriesForm(bool: boolean) {
    this.addNewCategory = bool;
    if (bool) {
      document.body.style.setProperty('overflow', 'hidden');
    } else {
      document.body.style.setProperty('overflow', 'auto');
    }
  }
  showIngredientsForm(bool: boolean) {
    if (this.secondForm.value.ingredients.data.length === 0) {
      this.invalidIngredients = true;
      return
    }

    this.addNewIngredient = bool;
    if (bool) {
      document.body.style.setProperty('overflow', 'hidden');
    } else {
      document.body.style.setProperty('overflow', 'auto');
    }

  }
}
