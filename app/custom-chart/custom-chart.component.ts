import { AfterViewInit, Component, OnInit } from '@angular/core';
import { group } from '@angular/animations';
import { ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { LegendItemVisualArgs } from '@progress/kendo-angular-charts';
import {
  Path,
  Text,
  Group,
  geometry,
  Element,
  Rect as RectShape,
} from '@progress/kendo-drawing';
const { Point, Rect, Size } = geometry;

@Component({
  selector: 'app-custom-chart',
  templateUrl: './custom-chart.component.html',
  styleUrls: ['./custom-chart.component.css'],
})
export class CustomChartComponent implements AfterViewInit {
  public chartTitle = 'Gross domestic product growth ';
  public legend: Element;
  public categories: any[] = [
    'T122222222222222222222222222222222222222222222222222222a',
    'T2',
    'T3',
    'T4',
    'T5',
    'T6',
    'T7',
    'T8',
    'T9',
    'T10',
    'T11',
    'T12',
    'T13',
    'T14',
    'T15',
    'T16',
    'T17',
    'T18',
    'T19',
    'T20',
    'T21',
    'T22',
    'T23',
    'T24',
    'T25',
    'T26',
    'T27',
    'T28',
    'T29',
    'T30',
    'T31',
    'T32',
    'T33',
    'T34',
    'T35',
    'T36',
    'T37',
    'T38',
    'T39',
    'T40',
    'T41',
    'T42',
    'T43',
    'T44',
    'T45',
    'T46',
    'T47',
    'T48',
    'T49',
    'T50',
    'T51',
    'T52',
    'T53',
    'T54',
    'T55',
    'T56',
    'T57',
    'T58',
    'T59',
    'T60',
    'T61',
    'T62',
    'T63',
    'T64',
    'T65',
    'T66',
    'T67',
    'T68',
    'T69',
    'T70',
    'T71',
    'T72',
    'T73',
    'T74',
    'T75',
    'T76',
    'T77',
    'T78',
    'T79',
    'T80',
    'T81',
    'T82',
    'T83',
    'T84',
    'T85',
    'T86',
    'T87',
    'T88',
    'T89',
    'T90',
    'T91',
    'T92',
    'T93',
    'T94',
    'T95',
    'T96',
    'T97',
    'T98',
    'T99',
    'T100',
  ];
  public series: any[] = [
    {
      name: 'Need',
      data: [
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
      ],
      markerBackground: '#D8A7D9',
    },
    {
      name: 'Solution',
      data: [
        4.6666666666666666643, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, 7.832,
        4.3, 4.3, 4.6666666666666666643, 7.295, 7.175, 6.376, 8.153, 8.535,
        5.247, 7.832, 4.3, 4.3, 4.6666666666666666643, 7.295, 7.175, 6.376,
        8.153, 8.535, 5.247, 7.832, 4.3, 4.3, 4.6666666666666666643, 7.295,
        7.175, 6.376, 8.153, 8.535, 5.247, 7.832, 4.3, 4.3,
        4.6666666666666666643, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, 7.832,
        4.3, 4.3, 4.6666666666666666643, 7.295, 7.175, 6.376, 8.153, 8.535,
        5.247, 7.832, 4.3, 4.3, 4.6666666666666666643, 7.295, 7.175, 6.376,
        8.153, 8.535, 5.247, 7.832, 4.3, 4.3, 4.6666666666666666643, 7.295,
        7.175, 6.376, 8.153, 8.535, 5.247, 7.832, 4.3, 4.3,
        4.6666666666666666643, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, 7.832,
        4.3, 4.3, 4.6666666666666666643, 7.295, 7.175, 6.376, 8.153, 8.535,
        5.247, 7.832, 4.3, 4.3,
      ],
      markerBackground: '#B2CFE8',
    },
    // {
    //   name: "Germany",
    //   data: [
    //     0.01, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.69, 2.995,
    //   ],
    // },
    // {
    //   name: "World",
    //   data: [
    //     1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727,
    //   ],
    // },
  ];
  // tslint:disable-next-line:max-line-length
  public thumbnailSrc =
    'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg';
  // tslint:disable-next-line:max-line-length
  public cover =
    'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/black_sea.jpg';
  public liked = false;
  public toggleLike(): void {
    this.liked = !this.liked;
  }
  public wrenchIcon(): string {
    return this.liked ? 'k-icon k-i-wrench' : 'k-icon k-i-wrench';
  }
  public globeIcon(): string {
    return this.liked ? 'k-icon k-i-globe' : 'k-icon k-i-globe';
  }
  public stackedIcon(): string {
    return this.liked ? 'k-icon k-i-paint' : 'k-icon k-i-paint';
  }
  public gearsIcon(): string {
    return this.liked ? 'k-icon k-i-gears' : 'k-icon k-i-gears';
  }
  public heartIcon(): string {
    return this.liked ? 'k-icon k-i-heart' : 'k-icon k-i-heart-outline';
  }
  @Input() height: number;
  chartWidth: number = 400; //default value
  constructor(public renderer: Renderer2, private elRef: ElementRef) {}
  public labelsVisual(args: LegendItemVisualArgs): Element {
    if (args.series.name === 'Need') {
      // Create rectangular shape on top of which the label will be drawn
      const rectOptions = {
        stroke: { width: 2, color: '#fff' },
        fill: { color: '#fff' },
      };
      const rectGeometry = new Rect(new Point(0, 3), new Size(60, 10));
      const rect: RectShape = new RectShape(rectGeometry, rectOptions);
      // Create the lines used to represent the custom legend item
      const pathColor = args.options.markers.border.color;
      const path1 = new Path({
        stroke: {
          color: pathColor,
          width: 3,
        },
      });
      const path2 = new Path({
        stroke: {
          color: pathColor,
          width: 3,
        },
      });
      // The paths are constructed by using a chain of commands
      path1.moveTo(0, 7).lineTo(10, 7).close();
      path2.moveTo(15, 7).lineTo(25, 7).close();
      // Create the text associated with the legend item
      const labelText = args.series.name;
      const labelFont = args.options.labels.font;
      const fontColor = args.options.labels.color;
      const textOptions = { font: labelFont, fill: { color: fontColor } };
      const text = new Text(labelText, new Point(27, 0), textOptions);
      // Place all the shapes in a group
      const group = new Group();
      group.append(rect, path1, path2, text);
      // set opacity if the legend item is disabled
      if (!args.active) {
        group.opacity(0.5);
      }
      return group;
    }
    // return the default visualization of the legend items
    return args.createVisual();
  }
  ngAfterViewInit() {
    console.log(this);
    if (this.series) {
      if (this.series[0].data.length < 75 || this.series[1].data.length < 75) {
        return;
      }
      //if(this.series[0].data.count)
      this.chartWidth = this.series[0].data.length * 6.5;
    }
    this.renderer.setStyle(
      this.elRef.nativeElement.querySelector('.k-chart-surface'),
      'width',
      this.chartWidth + 'px'
    );
    this.renderer.setStyle(
      this.elRef.nativeElement.querySelector('.k-chart-surface'),
      'height',
      this.chartHeight + 'px'
    );
  }
  public get chartHeight(): number {
    var lgth = 0;
    var longest;
    for (var i = 0; i < this.categories.length; i++) {
      if (this.categories[i].length > lgth) {
        lgth = this.categories[i].length;
        longest = this.categories[i];
      }
    }
    console.log(longest, longest.length);

    return longest.length * 10;
  }
  // public chips = [
  //     {
  //         label: "Success",
  //         type: "success"
  //       },
  // ];
}
