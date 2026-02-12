import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerraceLayoutComponent } from './terrace-layout.component';

describe('TerraceLayoutComponent', () => {
  let component: TerraceLayoutComponent;
  let fixture: ComponentFixture<TerraceLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerraceLayoutComponent]
    });
    fixture = TestBed.createComponent(TerraceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
