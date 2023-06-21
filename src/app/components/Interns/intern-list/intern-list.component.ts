import { Component, OnInit } from '@angular/core';
import { intern } from 'src/app/models/interns.model';
import { TableModule } from 'primeng/table';

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
    department: "Engineering",
    image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    reviews: 4
  },
  { id: "789012",
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: 9876543210,
    stipend: 1200,
    department: "Marketing",
    image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    reviews: 4
  },
  { id: "345678",
    name: "Alex Johnson",
    email: "alexjohnson@example.com",
    phone: 5678901234,
    stipend: 900,
    department: "Finance",
    image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    reviews: 5
  },
  { id: "901234",
    name: "Emily Davis",
    email: "emilydavis@example.com",
    phone: 4321098765,
    stipend: 1100,
    department: "Human Resources",
    image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    reviews: 3
  },
  { 
    id: "567890",
    name: "Michael Brown",
    email: "michaelbrown@example.com",
    phone: 2109876543,
    stipend: 950,
    department: "Operations",
    image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    reviews: 3
  },
  {
    id: "345678",
    name: "John Doe",
    email: "johndoe@example.com",
    phone: 1234567890,
    stipend: 1500,
    department: "Sales",
    image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    reviews: 3
  },
  {
    id: "234567",
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    phone: 9876543210,
    stipend: 1100,
    department: "Finance",
    image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    reviews: 3
  },
  {
    id: "456789",
    name: "Michael Smith",
    email: "michaelsmith@example.com",
    phone: 1234567890,
    stipend: 1300,
    department: "HR",
    image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    reviews: 3
  },
  {
    id: "567890",
    name: "Sarah Johnson",
    email: "sarahjohnson@example.com",
    phone: 9876543210,
    stipend: 1400,
    department: "Operations",
    image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    reviews: 3
  },
  {
    id: "678901",
    name: "David Smith",
    email: "davidsmith@example.com",
    phone: 1234567890,
    stipend: 1200,
    department: "IT",
    image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    reviews: 3
  },
  {
    id: "890123",
    name: "Emily Johnson",
    email: "emilyjohnson@example.com",
    phone: 9876543210,
    stipend: 1100,
    department: "Research",
    image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    reviews: 3
  },
  {
    id: "901234",
    name: "Daniel Smith",
    email: "danielsmith@example.com",
    phone: 1234567890,
    stipend: 1500,
    department: "Marketing",
    image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    reviews: 3
  },
  {
    id: "012345",
    name: "Olivia Johnson",
    email: "oliviajohnson@example.com",
    phone: 9876543210,
    stipend: 1300,
    department: "Sales",
    image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    reviews: 3
  }
,
{
  id: "123456",
  name: "James Smith",
  email: "jamessmith@example.com",
  phone: 1234567890,
  stipend: 1400,
  department: "Finance",
  image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
  reviews: 3
}
,
{
  id: "789012",
  name: "Sophia Johnson",
  email: "sophiajohnson@example.com",
  phone: 9876543210,
  stipend: 1200,
  department: "HR",
  image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
  reviews: 3
}
,
{
  id: "234567",
  name: "Liam Smith",
  email: "liamsmith@example.com",
  phone: 1234567890,
  stipend: 1500,
  department: "Operations",
  image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
  reviews: 3
}
,
{
  id: "456789",
  name: "Ava Johnson",
  email: "avajohnson@example.com",
  phone: 9876543210,
  stipend: 1100,
  department: "IT",
  image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
  reviews: 3
}
,
{
  id: "567890",
  name: "Benjamin Smith",
  email: "benjaminsmith@example.com",
  phone: 1234567890,
  stipend: 1300,
  department: "Research",
  image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
  reviews: 3
}
,
{
  id: "678901",
  name: "Mia Johnson",
  email: "miajohnson@example.com",
  phone: 9876543210,
  stipend: 1400,
  department: "Marketing",
  image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
  reviews: 3
}
,
{
  id: "890123",
  name: "Ethan Smith",
  email: "ethansmith@example.com",
  phone: 1234567890,
  stipend: 1200,
  department: "Sales",
  image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
  reviews: 3
}

  ]

  constructor(){}
  ngOnInit(): void {
    // this.interns.push
  }

}
