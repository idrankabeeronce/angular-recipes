import { Inject, Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HOST_URL, HostUrl } from './tokens/host-url';

export interface PageMetadata {
  title: string;
  imageRelativeUrl: any;
  description: string;
  author: string;
  keywords: string[];
  type: string;
}

const defaultMetadata: PageMetadata = {
  title: 'Recipes',
  description: 'Here you can find good recipes',
  author: '',
  keywords: ['recipes', 'try at home'],
  type: 'website',
  imageRelativeUrl: 'assets/images/RECIPES.png'
}

@Injectable()
export class MetadataService {

  constructor(private metaTagService: Meta,
    private titleService: Title,
    @Inject(HOST_URL) private hostUrl: string,
    private router: Router) { }

  public updateMetadata(metadata: Partial<PageMetadata>, index: boolean = true): void {
    const pageMetadata: PageMetadata = { ...defaultMetadata, ...metadata };
    const metatags: MetaDefinition[] = this.generateMetaDefinitions(pageMetadata);

    this.metaTagService.addTags([
      ...metatags,
      { property: 'og:url', content: `${this.hostUrl}${this.router.url}` },
      { name: 'robots', content: index ? 'index, follow' : 'noindex' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
    ]);

    this.titleService.setTitle(pageMetadata.title);
  }

  private generateMetaDefinitions(metadata: PageMetadata): MetaDefinition[] {
    return [
      { name: 'title', content: metadata.title },
      { property: 'og:title', content: metadata.title },

      { name: 'description', content: metadata.description },
      { property: 'og:description', content: metadata.description },

      { name: 'author', content: metadata.author },
      { property: 'og:author', content: metadata.author },

      { name: 'keywords', content: metadata.keywords.join(', ') },

      { property: 'og:type', content: metadata.type },

      
      { property: 'og:image', content: `${this.hostUrl}/${metadata.imageRelativeUrl}`}
    ];
  }
}
