import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '@app/_services';

@Component({ templateUrl: 'continent.component.html' })
export class ContinentComponent implements OnInit {
    continent: String;
    allCountryList: Array<any>;
    allCountryCodeList: Array<any>;
    pageList: any;

    constructor(private data: DataService, private router: Router,private zone: NgZone, private route: ActivatedRoute) {
        this.pageList = [];
        this.allCountryList = this.data.getCountriesWithContinent();
        this.allCountryCodeList = this.data.getCountriesWithCode();
    }

    ngOnInit() {
        this.route.queryParams
          .subscribe(params => {
            this.continent = params.name;
            this.pageList = this.allCountryList.filter((c) => c.continent === this.continent )
          }
        );
      }

      getItemIth(item){
        const tempCode = this.allCountryCodeList.filter((c) => c.country === item.country )[0].abbreviation
        const temp = this.data.getByCode(tempCode)[0]

        return temp ? temp.ithalat: 'false';
      }

      getItemIhr(item){
        const tempCode = this.allCountryCodeList.filter((c) => c.country === item.country )[0].abbreviation
        const temp = this.data.getByCode(tempCode)[0]
        
        return temp ? temp.ihracat: 'false';
      }

      getItemNote(item){
        const tempCode = this.allCountryCodeList.filter((c) => c.country === item.country )[0].abbreviation
        const temp = this.data.getByCode(tempCode)[0]
        
        return temp ? temp.note: '';
      }
  
}
