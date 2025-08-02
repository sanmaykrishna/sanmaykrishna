import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pic } from './pic';

describe('Pic', () => {
  let component: Pic;
  let fixture: ComponentFixture<Pic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
