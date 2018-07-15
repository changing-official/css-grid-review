import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonProfileAbilitiesComponent } from './pokemon-profile-abilities.component';

describe('PokemonProfileAbilitiesComponent', () => {
  let component: PokemonProfileAbilitiesComponent;
  let fixture: ComponentFixture<PokemonProfileAbilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonProfileAbilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonProfileAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
