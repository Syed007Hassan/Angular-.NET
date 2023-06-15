import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BardAssistanceComponent } from './bard-assistance.component';

describe('BardAssistanceComponent', () => {
  let component: BardAssistanceComponent;
  let fixture: ComponentFixture<BardAssistanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BardAssistanceComponent]
    });
    fixture = TestBed.createComponent(BardAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
