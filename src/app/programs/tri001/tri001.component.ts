import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../programs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { YoubikeStation } from '../../model/youbike-station.service';

@Component({
  selector: 'app-tri001',
  templateUrl: './tri001.component.html',
  styleUrls: ['./tri001.component.scss']
})
export class Tri001Component implements OnInit {

  // public item: Array<any> = new Array<any>(); // 因為會有多筆，先建一個any型別的陣列資料來接回傳值
  public uBike: Array<YoubikeStation> = new Array<YoubikeStation>(); // 接call後端api所得到的資料
  public selectedData: YoubikeStation; // 所選的那一筆資料
  public uBikeData: YoubikeStation = new YoubikeStation(); // 關鍵要new起來

  constructor(private programService: ProgramsService) { }

  ngOnInit() {
    this.getData();
  }

  public openSnackbar() {
    this.programService.openSnackBar('鐵人三十天測試一波', '完成');
  }

  getData() {
    this.programService.getYouBikeData().subscribe((response: any) => {
        // this.item = response;
        this.uBike  = response.result.records; // 將多筆YouBike系統位置直接給我
        // console.log(this.uBike); // log接到的資料
      },
      (error: HttpErrorResponse) => this.programService.HandleError(error)
    );
  }

  getUikeDataStation(item: YoubikeStation) {
    this.uBikeData = item; // 將選定的資料給予空的uBike物件
    this.programService.openSnackBar(item.lat, item.lng); // 點下去會有強行別屬性讓你選擇
  }

}
