import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule  } from '@ng-bootstrap/ng-bootstrap';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    // FAQComponent

    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbAccordionModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class FAQModule { }
