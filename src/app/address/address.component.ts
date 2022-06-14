import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { City } from '../model/city';
import { Country } from '../model/country';
import { State } from '../model/state';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private common: CommonService, private formbuilder:FormBuilder) { }

  countryForm: FormGroup;
  stateForm: FormGroup;
  cityForm: FormGroup;

  cityForm2: FormGroup;

  counrtyList: Country[];
  stateList: State[];
  cityList: City[];

  countries: Country;
  states: State;
  cities: City;

  ngOnInit(): void {

    this.countryForm= this.formbuilder.group({

      countryId: [],
      countryName: []

    })

    this.stateForm= this.formbuilder.group({

      stateId: [],
      stateName: [], 
    })

    this.cityForm= this.formbuilder.group({

      cityId: [],
      cityName: [],
    })

    this.cityForm2= this.formbuilder.group({

      cityId: [],
      cityName: [],
      state: this.formbuilder.group({
        stateId: [],
        stateName: [],  
        country: this.formbuilder.group({
          countryId: [],
          countryName: []
        })
      })
    })

    this.common.getCountry().subscribe(data=>{
      this.counrtyList= data

      console.log(this.counrtyList)
    })

  }

  onchangeCountry(c: any)
  {
    // console.log(c.countryName);
    // console.log(c.slist);
    console.log(this.stateList);
    this.stateList= c.slist;
    console.log("List");
    console.log(this.stateList);
    console.log("List");
    // this.stateList= c;

  }

  onchangeState(s: any)
  {
    this.cityList= s;
  }

  onchangeCity(cityid: number)
  {
    
      
    
  }

  update()
  {
    
  }
  

}
