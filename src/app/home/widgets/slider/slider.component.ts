import { Component, OnInit, Input } from '@angular/core';
import { Home } from 'src/app/shared/classes/home';
import { HomeContentService } from 'src/app/shared/services/home-content.service';
import { HomeSlider } from '../../../shared/data/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() sliders: any[];
  @Input() class: string;
  @Input() textClass: string;
  @Input() category: string;
  @Input() buttonText: string;
  @Input() buttonClass: string;

  @Input() homeContent: Home[] ;
  public imagesSlider
  constructor(public homeContentService: HomeContentService) { 
    // this.homeContentService.getContent.subscribe(data => this.homeContent = data );
    // console.log(this.homeContent)
    
  }

  ngOnInit(): void {
  }

  public HomeSliderConfig: any = HomeSlider;

}
