import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonProfileTypeEffectivenessComponent } from './pokemon-profile-type-effectiveness.component';

describe('PokemonProfileTypeEffectivenessComponent', () => {
  let component: PokemonProfileTypeEffectivenessComponent;
  let fixture: ComponentFixture<PokemonProfileTypeEffectivenessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonProfileTypeEffectivenessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonProfileTypeEffectivenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
