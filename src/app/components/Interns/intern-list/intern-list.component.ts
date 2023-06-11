import { Component, OnInit } from '@angular/core';
import { intern } from 'src/app/models/interns.model';

@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.css']
})
export class InternListComponent implements OnInit{

  interns: intern[] =[
  { id: "123456",
    name: "John Doe",
    email: "johndoe@example.com",
    phone: 1234567890,
    stipend: 1000,
    department: "Engineering"
  },
  { id: "789012",
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: 9876543210,
    stipend: 1200,
    department: "Marketing"
  },
  { id: "345678",
    name: "Alex Johnson",
    email: "alexjohnson@example.com",
    phone: 5678901234,
    stipend: 900,
    department: "Finance"
  },
  { id: "901234",
    name: "Emily Davis",
    email: "emilydavis@example.com",
    phone: 4321098765,
    stipend: 1100,
    department: "Human Resources"
  },
  { 
    id: "567890",
    name: "Michael Brown",
    email: "michaelbrown@example.com",
    phone: 2109876543,
    stipend: 950,
    department: "Operations"
  }
  ]

  constructor(){}
  ngOnInit(): void {
    // this.interns.push
  }

}
