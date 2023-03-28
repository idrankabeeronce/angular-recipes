import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from "@angular/platform-browser";
import * as data from '../../assets/base/articles.json';
import * as dataHeader from '../../assets/base/recipes.json';

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @ViewChild('bodyEl') pdfBody!: ElementRef;


  title = 'asd';
  dataArticles = (data as any).default;
  dataRecipes = (dataHeader as any).default;
  body: any = {};
  displayingItem: any = null;
  foundItem = false;
  video: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private titleService: Title) {

  }

  ngOnInit(): void {
    //this.video = document.getElementById("video");


    const ref = this.activatedRoute.snapshot.paramMap.get('id');

    this.titleService.setTitle('Page not found | Recipes')
    for (let item of this.dataArticles) {
      if (ref === item.ref) {
        this.displayingItem = item;
        this.body = this.displayingItem.body;
      }
    }
    if (this.displayingItem === null)
      return


    this.titleService.setTitle(`${this.displayingItem.title} | Recipes`)
    this.foundItem = true;

    for (let item of this.dataRecipes) {
      if (item.id === this.displayingItem.id) {
        item.portionsDefault = item.portions;
        this.displayingItem.header = item;
      }
    }


  }
  Round(value: number) {
    return Math.round(value * 100) / 100
  }
  changeAmount(value: number) {
    if (this.displayingItem.header.portions > 1 || value > 0)
      this.displayingItem.header.portions += value;
  }
  toggleVideo(video: any) {
    if (video.paused == true) {
      // Play the video
      video.play();
    } else {
      video.pause();
    }
  }

  toggleMute(video: any, bar: any) {
    video.muted = !video.muted;
    if (video.muted) 
      bar.value = 0
    else
      bar.value = video.volume;
  }
  toggleFullScreen(video: any) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  }
  setTime(video: any, bar: any) {
    var time = video.duration * (bar.value / 100);

    // Update the video time
    video.currentTime = time;
  }
  calcTime(video: any, bar: any) {
    var value = (100 / video.duration) * video.currentTime;

    bar.value = value;
  }
  volumeOnChange(video: any, bar: any) {
    video.volume = bar.value;
  }
  saveAsPDF() {
    const doc = new jsPDF();

    var canvasOfRecipe = document.createElement('canvas');
    var ctx = canvasOfRecipe.getContext('2d');

    var img = new Image();
    img.src = this.displayingItem.header.imgSrc;

    canvasOfRecipe.height = img.height;
    canvasOfRecipe.width = img.width;
    ctx?.drawImage(img, 0, 0);




    const documentDefinition = {
      pageMargins: [20, 20, 20, 20],
      footer: (currentPage: any, pageCount: any) => { return { text: currentPage.toString() + '/' + pageCount, alignment: 'right', width: 'auto', fontSize: 8, margin: [0, 0, 20, 0] } },

      content: [
        {

          columns: [
            {
              image: canvasOfRecipe.toDataURL(),
              width: 170,
              height: 250,
              cover: [170, 250]
            },
            [

              this.createRow(this.displayingItem.header.categories, 'categories', 'auto', 'center', 10),
              {
                text: this.displayingItem.header.title,
                style: 'header',
              },
              {
                text: 'Author: ' + this.displayingItem.header.author.name,
                style: 'author'
              },
              {
                columns: [
                  {
                    width: 'auto',
                    text: 'Portions: ' + this.displayingItem.header.portionsDefault,
                    bold: true,
                    fontSize: 10,
                  }, {
                    width: 'auto',
                    bold: true,
                    fontSize: 10,
                    text: 'Time: ' + (this.displayingItem.header.timeToDo.hours > 0 ? +this.displayingItem.header.timeToDo.hours + ' hours ' : '') + (this.displayingItem.header.timeToDo.minutes > 0 ? +this.displayingItem.header.timeToDo.minutes + ' minutes' : '')
                  }
                ]
              }
            ],
          ],
          margin: [0, 0, 0, 20]
        },
        {
          text: this.body.desc,
          fontSize: 12,
          margin: [0, 0, 0, 20],
          lineHeight: 2
        },
        {
          text: 'Ingredients',
          fontSize: 12,
          margin: [0, 0, 0, 10],
          lineHeight: 2,
          bold: true
        },
        this.createIngredientsTable(),
        {
          text: 'Instructions',
          fontSize: 12,
          margin: [0, 0, 0, 20],
          lineHeight: 2,
          bold: true,
          pageBreak: 'before'
        }
      ],
      styles: {
        header: {
          fontSize: 28,
          bold: true,
          margin: [0, 0, 0, 20],
          alignment: 'center'
        },
        categories: {
          fontSize: 8,
          bold: true,
          margin: [0, 30, 0, 20],
          color: '#34742E'
        },
        author: {
          fontSize: 10,
          margin: [0, 0, 0, 20]
        }
      },
      defaultStyle: {
        columnGap: 20
      }
    }


    pdfMake.createPdf(documentDefinition).print();

  }

  createRow(data: any, style?: string, width?: any, alignment?: any, gap?: any) {
    var columns: any = { columns: [], alignment: alignment, columnGap: gap };
    columns.columns.push({ width: '*', text: '' })

    for (let item of data)
      columns.columns.push({ text: item.toUpperCase(), link: window.location.hostname + '/?category=' + item, style: style, width: width })

    columns.columns.push({ width: '*', text: '' })

    return columns
  }

  createIngredientsTable() {
    var res: any = { table: { heights: 20, widths: ['auto', '*', 'auto'], body: [] }, layout: 'noBorders' };

    for (let ingredient of this.displayingItem.header.ingredients) {
      res.table.body.push([{ alignment: 'left', text: ingredient.name }, { text: '' }, { alignment: 'right', text: (ingredient.amount > 0 ? ingredient.amount : '') + ' ' + ingredient.suffix }])
    }
    return res
  }
}
