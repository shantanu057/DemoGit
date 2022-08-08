import { Component} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent{

  empdet:any[]=[
    {firstname:"Shan",secondname:"Kr",lastname:"Gupta",age:22,gender:'M',dob:"01-03-2001",add1:'India',add2:'MP'},
    {firstname:"Tom",secondname:"V",lastname:"Potter",age:20,gender:'M',dob:"05-03-2001",add1:'US',add2:'NewYork'},
    {firstname:"Harry",secondname:"",lastname:"Potter",age:25,gender:'M',dob:"02-08-2000",add1:'UK',add2:'London'},
    {firstname:"Dora",secondname:"The",lastname:"Explora",age:12,gender:'F',dob:"07-01-2010",add1:'Austraila',add2:'Sydney'},
    {firstname:"Oliv",secondname:"",lastname:"Kumari",age:25,gender:'F',dob:"05-09-2004",add1:'US',add2:'WhiteHouse'}
]
  dobformat:string="dd-MM-yyyy";
  
}
