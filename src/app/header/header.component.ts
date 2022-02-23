import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  locationForm: FormGroup = new FormGroup({
    location: new FormControl('Chennai'),
  });
  searchForm: FormGroup = new FormGroup({
    inputValue: new FormControl(''),
  });

  ngOnInit(): void {
  }

  changeLocation(){
    console.log();
    
  }

  upsertSearch(){

  }

}