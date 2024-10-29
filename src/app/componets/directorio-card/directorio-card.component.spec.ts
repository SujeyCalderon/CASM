import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioCardComponent } from './directorio-card.component';

describe('DirectorioCardComponent', () => {
  let component: DirectorioCardComponent;
  let fixture: ComponentFixture<DirectorioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorioCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
