import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonProfileTypeComponent } from './pokemon-profile-type.component';

describe('PokemonProfileTypeComponent', () => {
  let component: PokemonProfileTypeComponent;
  let fixture: ComponentFixture<PokemonProfileTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonProfileTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonProfileTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
