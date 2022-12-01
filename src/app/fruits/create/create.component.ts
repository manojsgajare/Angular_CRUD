import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  fruitForm: Fruits = {
    id: 0,
    name: '',
    color: '',
    quantity: 0,
    price: 0,
  };

  constructor(
    private fruitService: FruitsService,
    // Inject Route
    private router: Router
  ) {}

  ngOnInit(): void {}

  create() {
    this.fruitService.create(this.fruitForm).subscribe({
      next: (data) => {
        this.router.navigate(["/fruits/home"])
      },
      error:(error) => {
        console.log(error);
      }
    });
  }
}
