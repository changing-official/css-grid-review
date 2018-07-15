import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonProfileEvolutionComponent } from './pokemon-profile-evolution.component';

describe('PokemonProfileEvolutionComponent', () => {
  let component: PokemonProfileEvolutionComponent;
  let fixture: ComponentFixture<PokemonProfileEvolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonProfileEvolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonProfileEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
