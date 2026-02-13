import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlacesComponent } from './table-places.component';

describe('TablePlacesComponent', () => {
  let component: TablePlacesComponent;
  let fixture: ComponentFixture<TablePlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePlacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
