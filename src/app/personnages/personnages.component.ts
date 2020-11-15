import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.css']
})
export class PersonnagesComponent implements OnInit {
  tabPersonnages = [
    {nom:'Donald',image:'assets/donald.png', nb:44, majeur:true},
    {nom:'Popey',image:'assets/popey.jpg', nb:16, majeur:true},
    {nom:'Sam',image:'assets/happy.jpg', nb:14, majeur:false }
    ];
Inc(Pers : number)
{
  if (Pers == 0)
this.tabPersonnages[0].nb++;
if (Pers == 1)
this.tabPersonnages[1].nb++;
if (Pers == 2)
this.tabPersonnages[2].nb++;

}  
nbmaj()
{
let numb=0;
for (let i of this.tabPersonnages){
  if (i.majeur)
  numb++;
}
  return numb;


}  
  constructor() { }

  ngOnInit(): void {
  }

}
