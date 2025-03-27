import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investmen.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  results = this.investmentService.resultsData?.asReadonly();
}
