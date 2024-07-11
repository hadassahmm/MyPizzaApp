import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicPizzaComponent } from './classic-pizza.component';

describe('ClassicPizzaComponent', () => {
  let component: ClassicPizzaComponent;
  let fixture: ComponentFixture<ClassicPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassicPizzaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
