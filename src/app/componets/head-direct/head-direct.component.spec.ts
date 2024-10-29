import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadDirectComponent } from './head-direct.component';

describe('HeadDirectComponent', () => {
  let component: HeadDirectComponent;
  let fixture: ComponentFixture<HeadDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadDirectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
