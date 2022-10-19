import { Component, OnInit } from '@angular/core';
import { Continents } from '../continents';
import { ContinentsService } from '../continents.service';

@Component({
  selector: 'app-listecontinent',
  templateUrl: './listecontinent.component.html',
  styleUrls: ['./listecontinent.component.css']
})
export class ListecontinentComponent implements OnInit {

  constructor(private continentsService:ContinentsService) { }

  continents:Continents[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.continentsService.get().subscribe((data) =>{
      this.continents = data;
    })
  }

}
