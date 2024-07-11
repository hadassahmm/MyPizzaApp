import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicPizzasComponent } from './classic-pizzas.component';

describe('ClassicPizzasComponent', () => {
  let component: ClassicPizzasComponent;
  let fixture: ComponentFixture<ClassicPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassicPizzasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
