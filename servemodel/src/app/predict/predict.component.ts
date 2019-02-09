import { Component, OnInit } from '@angular/core';
import { Iris, Prediction } from '../types';
import { IrisService } from '../iris.service';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss']
})
export class PredictComponent implements OnInit {

  iris: Iris = new Iris();
  prediction: Prediction;

  // properties for pie chart
  // view: any[] = [800, 400]
  showLegend = true;
  colorScheme = { domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']};
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  trimLabels = false;
  animations = true;


  constructor(private irisService: IrisService) {
   }

  ngOnInit() {
  }

  predictIris(){
    return this.irisService.predictIris(this.iris).subscribe(res => this.prediction = res);
  }

  onSelect(event){
    console.log(event);
  }


}
