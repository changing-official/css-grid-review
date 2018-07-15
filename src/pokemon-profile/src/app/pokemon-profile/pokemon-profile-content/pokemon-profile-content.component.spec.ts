import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonProfileContentComponent } from './pokemon-profile-content.component';

describe('PokemonProfileContentComponent', () => {
  let component: PokemonProfileContentComponent;
  let fixture: ComponentFixture<PokemonProfileContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonProfileContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonProfileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
