import { TestBed } from '@angular/core/testing';

import { PreviewArticleService } from './preview-article.service';

describe('PreviewArticleService', () => {
  let service: PreviewArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviewArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
