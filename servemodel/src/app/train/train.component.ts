import { Component, OnInit } from '@angular/core';
import { IrisService } from '../iris.service';
import { SVCResult, SVCParameters } from '../types';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {

  svcParameter: SVCParameters = new SVCParameters();
  svcResult: SVCResult;
  positive: any;
  negative: any;

  constructor(private irisService: IrisService) { 

  }

  ngOnInit() {
  }

  trainModel(){
    this.irisService.trainModel(this.svcParameter).subscribe(res => {
      this.svcResult = res;
      this.positive = this.svcResult.accuracy/100;
      this.negative = 1 - this.positive;
    });
  }

}
