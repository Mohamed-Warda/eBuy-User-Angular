import { Component } from '@angular/core';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-accordion-config',
	standalone: true,
	imports: [NgbAccordionModule],
  styleUrls: ['./faq.component.css'],
	templateUrl: './faq.component.html',
	providers: [NgbAccordionConfig], // add the NgbAccordionConfig to the component providers
})
export class FAQComponent {
	constructor(config: NgbAccordionConfig) {
		// customize default values of accordions used by this component tree
		config.closeOthers = true;
	}
}
