import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
 

  public videosArray = []
  constructor(private youTubeService: YoutubeService) { }

  ngOnInit(): void {
    this.youTubeService
    .getVideosForChanel('UCbERSG_oGovGO_3JnLVcb_Q', 15)
    //.pipe(takeUntil(this.unsubscribe$))
    .subscribe(lista => {
      for (let element of lista["items"]) {
      this.videosArray.push(element)
      }
    });
  }
}
