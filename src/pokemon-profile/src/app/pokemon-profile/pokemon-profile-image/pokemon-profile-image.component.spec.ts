import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonProfileImageComponent } from './pokemon-profile-image.component';

describe('PokemonProfileImageComponent', () => {
  let component: PokemonProfileImageComponent;
  let fixture: ComponentFixture<PokemonProfileImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonProfileImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonProfileImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
