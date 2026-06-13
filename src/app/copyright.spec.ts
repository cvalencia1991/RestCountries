import { ElementRef } from '@angular/core';
import { Copyright } from './copyright';

describe('Copyright', () => {
  it('should create an instance', () => {
    const mockElementRef = {
      nativeElement: document.createElement('div'),
    } as ElementRef;
    const directive = new Copyright(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
