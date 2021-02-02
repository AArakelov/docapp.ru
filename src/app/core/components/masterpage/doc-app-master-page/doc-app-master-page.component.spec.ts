import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAppMasterPageComponent } from './doc-app-master-page.component';

describe('DocAppMasterPageComponent', () => {
  let component: DocAppMasterPageComponent;
  let fixture: ComponentFixture<DocAppMasterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocAppMasterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocAppMasterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
