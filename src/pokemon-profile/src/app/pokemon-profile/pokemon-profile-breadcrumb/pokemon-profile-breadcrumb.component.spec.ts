import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonProfileBreadcrumbComponent } from './pokemon-profile-breadcrumb.component';

describe('PokemonProfileBreadcrumbComponent', () => {
  let component: PokemonProfileBreadcrumbComponent;
  let fixture: ComponentFixture<PokemonProfileBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonProfileBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonProfileBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
