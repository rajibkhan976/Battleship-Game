import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayertwoComponent } from './playertwo.component';

describe('PlayertwoComponent', () => {
  let component: PlayertwoComponent;
  let fixture: ComponentFixture<PlayertwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayertwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
