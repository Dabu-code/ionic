import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationPushPage } from './notification-push.page';

describe('NotificationPushPage', () => {
  let component: NotificationPushPage;
  let fixture: ComponentFixture<NotificationPushPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotificationPushPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
