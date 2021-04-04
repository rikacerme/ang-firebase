import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {

    private selectedSource = new BehaviorSubject<string>('');
    selected = this.selectedSource.asObservable(); 

    public CountryList: any;
    private _list: any;

    constructor(){
        this._list = new Array;
    }

    changeSelected(s: string){
        this.selectedSource.next(s)
    }

    getList(){
        return JSON.parse(localStorage.getItem('countryList'));
    }

    setList(arr){
        localStorage.removeItem('countryList')
        localStorage.setItem('countryList', JSON.stringify(arr));
    }

    isExist(country){
        return this._list.some(function (el) {
            return el.country === country
        })
    };

    getByCode(code){
        this._list = this.getList();
        return this._list.filter(function(c){
            return c.country === code
        })
    }

    removeItem(country){
        this._list = this.getList();
        let el: any;

        if(this.isExist(country)){
            for(el in this._list){
                if(this._list[el].country === country){
                    this._list.splice(el,1)
                }
            }
        }

        this.setList(this._list)
    }

    updateNote(country,note){
        this._list = this.getList();
        let el: any;

        if(this.isExist(country)){
            for(el in this._list){
                if(this._list[el].country === country){
                    this._list[el].note = this._list[el].note + note;
                }
            }
        } else {
            const tempObj = {country: country,name: name, ithalat: false, ihracat: false,note: note};
            
            this._list.push(tempObj);
        }

        this.setList(this._list)
    }

    updateList(country: string,name: string,type: string,addFlag: boolean){
        this._list = this.getList();
        let el: any;

        if(this.isExist(country)){
            for(el in this._list){
                if(this._list[el].country === country){
                    if(type === "ith"){
                        this._list[el].ithalat = addFlag;
                    }else{
                        this._list[el].ihracat = addFlag;
                    }
                }
            }
        } else {
            const tempObj = {country: country,name: name, ithalat: false, ihracat: false, note: ''};
            
            if(type === "ith"){
                tempObj.ithalat = addFlag;
            }else{
                tempObj.ihracat = addFlag;
            }
            this._list.push(tempObj);
        }

        this.setList(this._list)
    }

}