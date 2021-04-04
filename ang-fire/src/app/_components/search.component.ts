import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '@app/_services';

@Component({ selector: 'search', templateUrl: 'search.component.html' })
export class SearchComponent implements OnInit {
  private selectedSource = new BehaviorSubject<string>('');
  selected = this.selectedSource.asObservable();
    myControl = new FormControl();
    options: string[] = ['One', 'Two', 'Three'];
    filteredOptions: Observable<string[]>;
    keyword = 'name';
    public countries = [
      {
        id: 1,
        name: 'Albania',
      },
      {
        id: 2,
        name: 'Belgium',
      },
      {
        id: 3,
        name: 'Denmark',
      },
      {
        id: 4,
        name: 'Montenegro',
      },
      {
        id: 5,
        name: 'Turkey',
      },
      {
        id: 6,
        name: 'Ukraine',
      },
      {
        id: 7,
        name: 'Macedonia',
      },
      {
        id: 8,
        name: 'Slovenia',
      },
      {
        id: 9,
        name: 'Georgia',
      },
      {
        id: 10,
        name: 'India',
      },
      {
        id: 11,
        name: 'Russia',
      },
      {
        id: 12,
        name: 'Switzerland',
      }
    ];

    constructor(private router: Router, private data: DataService) { }

    ngOnInit() {
  }
  
    search(ev){
      this.data.changeSelected(ev.name)
      console.log(ev.name)
    }
}