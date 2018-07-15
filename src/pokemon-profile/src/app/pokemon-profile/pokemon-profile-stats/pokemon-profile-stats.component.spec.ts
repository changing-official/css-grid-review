import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonProfileStatsComponent } from './pokemon-profile-stats.component';

describe('PokemonProfileStatsComponent', () => {
  let component: PokemonProfileStatsComponent;
  let fixture: ComponentFixture<PokemonProfileStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonProfileStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonProfileStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
