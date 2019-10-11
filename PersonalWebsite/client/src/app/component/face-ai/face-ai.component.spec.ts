import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceAIComponent } from './face-ai.component';

describe('FaceAIComponent', () => {
  let component: FaceAIComponent;
  let fixture: ComponentFixture<FaceAIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceAIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
