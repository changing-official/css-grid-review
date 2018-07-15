import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonProfileDescriptionComponent } from './pokemon-profile-description.component';

describe('PokemonProfileDescriptionComponent', () => {
  let component: PokemonProfileDescriptionComponent;
  let fixture: ComponentFixture<PokemonProfileDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonProfileDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonProfileDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
