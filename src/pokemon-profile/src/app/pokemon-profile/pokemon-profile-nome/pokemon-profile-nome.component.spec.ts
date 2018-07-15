import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonProfileNomeComponent } from './pokemon-profile-nome.component';

describe('PokemonProfileNomeComponent', () => {
  let component: PokemonProfileNomeComponent;
  let fixture: ComponentFixture<PokemonProfileNomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonProfileNomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonProfileNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
