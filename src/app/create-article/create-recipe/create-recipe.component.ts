import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import * as dataCategories from '../../../assets/base/categories.json';
import * as recipesJson from '../../../assets/base/recipes.json';
import * as articlesJson from '../../../assets/base/articles.json';

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

  list = [];
  actionList = ['galery', 'nutrition', 'instruction', 'advise'];

  adviseForm = new FormControl('')
  adviseCompleted = false;

  galeryForm = new FormGroup({
    imagesForm: new FormControl('', Validators.required),
    videoForm: new FormControl('')
  });

  profileImg = "";
  galery: any = { imgs: [], video: '' };

  nutritionForm = new FormGroup({
    energy: new FormControl(''),
    protein: new FormControl(''),
    fat: new FormControl(''),
    carbohydrate: new FormControl('')
  },);

  instructionForm = new FormGroup({
    instructionArray: new FormArray([
      new FormGroup({
        text: new FormControl('', [Validators.required, Validators.minLength(10)]),
        imageSrc: new FormControl('')
      })
    ])
  })
  instructionImgsArray: any = [];

  get instructionArray() {
    return this.instructionForm.controls['instructionArray'] as any
  }

  addInstruction() {
    if (!this.instructionArray.valid) {
      this.instructionArray.markAllAsTouched();
      return
    }

    const stepForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(10)]),
      imageSrc: new FormControl('')
    });
    this.instructionArray.push(stepForm);

  }

  deleteInstruction(stepIndex: number) {
    this.instructionArray.removeAt(stepIndex);
  }

  instructionCompleted = false;
  galeryCompleted = false;
  nutritionCompleted = false;

  onAttempt = false;
  preview = false;
  firstStep = new BehaviorSubject<boolean>(this.firstCompleted);
  secondStep = new BehaviorSubject<boolean>(this.secondCompleted);
  sub!: Subscription;
  categoryList: any = [];
  firstForm = new FormGroup({
    title: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    authorImg: new FormControl('', Validators.required)
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

  cancel() {
    this.changeBodyOverflow(false)
    const url = String(this.activatedRoute.snapshot.queryParamMap.get('returnURL')) === 'null' ? '/' : String(this.activatedRoute.snapshot.queryParamMap.get('returnURL'));
    this.router.navigateByUrl(url)
  }

  stepBack() {
    this.setFirstStep(false);
  }

  ngOnInit(): void {

    this.nutritionForm.disable();

    this.getCategories();

    this.changeBodyOverflow(true);
    this.sub = this.getFirstStep().subscribe((res) => {
      this.firstCompleted = res;
      console.log(this.firstForm);

    })
    this.sub = this.getSecondStep().subscribe((res) => {
      this.secondCompleted = res;
      this.changeBodyOverflow(!res);
    })

  }

  getCategories() {
    for (let category of (dataCategories as any).default) {
      this.categoryList.push(category);
    }
  }

  // drop handler, activate adding data to recipe
  drop(event: CdkDragDrop<any>) {
    transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

    if (event.container.data.includes('nutrition')) {
      this.nutritionForm.enable();

      Object.values(this.nutritionForm.controls).forEach((e: any) => {
        e.setValidators([Validators.required, Validators.min(0)])
      })
    }
    if (event.container.data.includes('advise'))
      this.adviseForm.setValidators([Validators.required, Validators.minLength(20)])
  }

  // add new
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

  // forms below are displaying while editing

  showCategoriesForm(bool: boolean) {
    this.addNewCategory = bool;
    this.changeBodyOverflow(bool);
  }

  showIngredientsForm(bool: boolean) {
    if (this.secondForm.value.ingredients.data.length === 0 && !bool) {
      this.invalidIngredients = true;
      return
    }
    this.addNewIngredient = bool;
    this.changeBodyOverflow(bool)

  }

  showPreviewOfPage(bool: boolean) {
    const item = this.defineItem();

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
    const importantEl = document.querySelectorAll('#important')
    const forms = [this.firstForm, this.secondForm, this.galeryForm, this.adviseForm, this.instructionArray];

    if(this.nutritionForm.enabled)
      forms.push(this.nutritionForm);
      
    var result = this.defineItem();

    var err = false;


    if (importantEl.length > 0 || !this.isAllvalid(forms)) {
      err = true;
    }
    if (err) {
      importantEl.forEach((e) => {
        e.classList.add('invalid');
      });
      forms.forEach((e) => {
        e.markAllAsTouched();
      })
      return
    }

    console.log(result);

  }

  isAllvalid(forms: any) {
    var valid = true;
    forms.forEach((e: any) => {
      if (!e.valid) {
        valid = false;
        return
      }
    })
    return valid
  }

  imageReader(element: any, displayingElement?: any) {
    let uploadedFile: any;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploadedFile = reader.result;
      if (displayingElement === undefined)
        this.profileImg = uploadedFile;
      else
        displayingElement = uploadedFile;
    });
    reader.readAsDataURL(element.files[0])
  }

  imageInstructionReader(element: any, index: number) {
    let uploadedFile: any;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploadedFile = reader.result;
      console.log(uploadedFile);
      this.instructionImgsArray[index] = uploadedFile;
    });
    reader.readAsDataURL(element.files[0])
  }
  galeryImagesReader(element: any) {
    const length = this.galery.imgs.length + element.files.length;

    if (length > 8) {
      alert('Only 8 images or less allowed')
      return
    }
    for (let file of element.files) {
      let uploadedFile: any;
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        uploadedFile = reader.result;
        this.galery.imgs.push(uploadedFile);
      });
      reader.readAsDataURL(file);
    }

  }

  galeryVideoReader(element: any) {
    let uploadedFile: any;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploadedFile = reader.result;
      this.galery.video = uploadedFile;
    });
    reader.readAsDataURL(element.files[0])
  }

  changeBodyOverflow(value: boolean) {
    if (value) {
      document.body.style.setProperty('overflow', 'hidden');
    } else {
      document.body.style.setProperty('overflow', 'auto');
    }
  }
  defineItem() {
    const instruction: any[] = [];
    let nutritionsObj: any = {}

    Object.values(this.instructionArray.controls).forEach((e: any, i: number) => {
      instruction.push({ text: e.value.text, imageSrc: this.instructionImgsArray[i] === undefined ? '' : this.instructionImgsArray[i] })
    })

    if (this.nutritionForm.enabled)
      nutritionsObj = {
        energy: this.nutritionForm.value?.energy,
        protein: this.nutritionForm.value?.protein,
        fat: this.nutritionForm.value?.fat,
        carbohydrate: this.nutritionForm.value?.carbohydrate
      };

    const item = {
      header: {
        title: this.firstForm.value.title,
        author: {
          name: this.firstForm.value.author,
          img: this.profileImg
        },
        id: (recipesJson as any).default.length + 1,
        likes: 0,
        dislikes: 0,
        saved: 0,
        imgSrc: this.galery.imgs[0],
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
        ref: `article-${(recipesJson as any).default.length}`
      },
      id: (recipesJson as any).default.length + 1,
      title: this.firstForm.value.title,
      ref: `article-${(recipesJson as any).default.length}`,
      body: {
        galery: {
          videoSrc: this.galery.video,
          imagesSrc: this.galery.imgs
        },
        nutritions: nutritionsObj,
        instructions: instruction,
        desc: this.firstForm.value.desc,
        advice: this.adviseForm?.value
      }
    }

    return item;
  }
}
