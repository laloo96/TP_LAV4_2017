import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaElPaisComponent } from './adivina-el-pais.component';

describe('AdivinaElPaisComponent', () => {
  let component: AdivinaElPaisComponent;
  let fixture: ComponentFixture<AdivinaElPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdivinaElPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinaElPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
