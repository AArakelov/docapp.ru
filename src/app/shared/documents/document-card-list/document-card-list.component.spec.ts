import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCardListComponent } from './document-card-list.component';

describe('DocumentCardListComponent', () => {
  let component: DocumentCardListComponent;
  let fixture: ComponentFixture<DocumentCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
