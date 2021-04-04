import { AfterViewInit, Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { User } from '@app/_models';
import { AccountService, DataService } from '@app/_services';
import { Router, ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { MatMenuTrigger } from '@angular/material/menu';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
    user: User;
    selected: any;
    selectedId: String;
    private chart: am4maps.MapChart;
    mapEvent: any;
    polygonSeries: any;

    items = [
        { "name": "Africa"},
        { "name": "Antarctica"},
        { "name": "Asia"},
        { "name": "Europe"},
        { "name": "North America"},
        { "name": "Oceania"},
        { "name": "South America"}
      ];

    @ViewChild(MatMenuTrigger)
    contextMenu: MatMenuTrigger;
    contextMenuPosition = { x: '0px', y: '0px' };

    onContextMenu(event: any) {
        // event.event.stopPropagation();
        // this.mapEvent.stopPropagation();
        this.contextMenuPosition.x = event.event.clientX + 'px';
        this.contextMenuPosition.y = event.event.clientY + 'px';
        this.contextMenu.openMenu();
      }

    ihracatYap() {
        console.log(this.mapEvent.target.dataItem)
        this.mapEvent.target.isActive = this.mapEvent.target.isActive === true ? false : true;
        this.data.updateList(this.mapEvent.target.dataItem._dataContext.id,this.mapEvent.target.dataItem._dataContext.name,'ihr',this.mapEvent.target.isActive)
    }

    ithalatYap(){
        this.mapEvent.target.selected = this.mapEvent.target.selected === true ? false : true;
        this.polygonSeries.getPolygonById(this.mapEvent.target.dataItem._dataContext.id).fill = am4core.color("#0f0");
        this.data.updateList(this.mapEvent.target.dataItem._dataContext.id,this.mapEvent.target.dataItem._dataContext.name,'ith',this.mapEvent.target.selected)
    }

    notEkle(){
        this.data.updateNote(this.mapEvent.target.dataItem._dataContext.id, 'yeni not ')
    }

    bilgileriSil(){
        this.mapEvent.target.selected = false;
        this.mapEvent.target.isActive = false;
        this.polygonSeries.getPolygonById(this.mapEvent.target.dataItem._dataContext.id).fill = am4core.color("#d9d9d9");
        this.data.removeItem(this.mapEvent.target.dataItem._dataContext.id)
    }

    goContinent(param){
        console.log(param.name)
        this.router.navigateByUrl('kita?name='+param.name)
    }

    constructor(private router: Router,private zone: NgZone, private accountService: AccountService, private data: DataService) {
        this.user = this.accountService.userValue;
        this.selected = "-";
    }

    ngOnInit(){
        this.data.selected.subscribe(s=> this.selected = s)
    }

    ngAfterViewInit() {
        const chart = am4core.create('chartdiv', am4maps.MapChart);
        chart.hiddenState.properties.opacity = 0.5; // this creates initial fade-in

        chart.geodata = am4geodata_worldLow;
        chart.projection = new am4maps.projections.Miller();

        const title = chart.chartContainer.createChild(am4core.Label);
        title.text = 'Select a country for see information';
        title.fontSize = 20;
        title.paddingTop = 30;
        title.align = 'center';
        title.zIndex = 100;
    
        this.polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        const polygonTemplate = this.polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = '{name}';

        // selected color
        var activeState = polygonTemplate.states.create("active");
        activeState.properties.fill = chart.colors.getIndex(9);
        // selected color 2
        var selectedState = polygonTemplate.states.create("selected");
        selectedState.properties.fill = chart.colors.getIndex(4);
          
          
        this.polygonSeries.useGeodata = true;
        let hoverItemId = null;
        let color :any;

        this.polygonSeries.mapPolygons.template.events.on('over', function(event) {
            // removed color from last hovred item 
            if(hoverItemId && this.polygonSeries.getPolygonById(hoverItemId).fill){
                color = this.polygonSeries.getPolygonById(hoverItemId).fill;
            }

            if(hoverItemId){
                if(color.hex === "#0000ff"){
                    this.polygonSeries.getPolygonById(hoverItemId).fill = am4core.color("#d9d9d9");
                }
            } 
            
            // check and set the hover color
            // refresh color
            hoverItemId = event.target.dataItem._dataContext.id;
            color = this.polygonSeries.getPolygonById(hoverItemId).fill;

            if(color && color.hex !== "#0000ff" && color.hex !== '#d9d9d9'){
                console.log(color.hex)
            }else{
                hoverItemId = event.target.dataItem._dataContext.id;
                this.polygonSeries.getPolygonById(hoverItemId).fill = am4core.color("#00f");
            }
            
        }.bind(this));

        this.polygonSeries.mapPolygons.template.events.on('up', function(event) {
            // event.event.stopPropagation();
            if(event.event.which === 3 || event.event.which === 1){
                //Open context menu
                event.target.selected = !event.target.selected;
                this.mapEvent = event;
                this.onContextMenu(event);
                this.selectedId = event.target.dataItem._dataContext.id;
            }
        }.bind(this));
    
        chart.zoomControl = new am4maps.ZoomControl();
        chart.zoomControl.valign = 'top';

        this.polygonSeries.exclude = ['AQ'];
        this.chart = chart;
    }
    
      ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
          if (this.chart) {
            this.chart.dispose();
          }
        });
      }
}

export interface Item {
    id: number;
    name: string;
  }