import { NotificationsRepository } from "../../src/applications/repositories/notifications-repository";
import { Notification } from "../../src/applications/entities/notification";

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
