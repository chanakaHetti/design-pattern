/**
 * ------------------------------------------------------------------
 * Here, NotificationService class depends on the
 * EmailService an SMSService classes, which
 *
 * The NotificationService class directly depends on the concrete
 * classes EmailService and SMSService. This tight coupling
 * makes it hard to change the notification mechanism or
 * add new types of notifications without modifying the
 * NotificationService class.
 *
 * violate the DIP because it relies on concrete implementions
 * rather that abstractions
 * ------------------------------------------------------------------
 */
class EmailService {
  sendEmail(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

class SMSService {
  sendSMS(message: string) {
    console.log(`Sending SMS: ${message}`);
  }
}

class NotificatioService {
  private emailService: EmailService;
  private smsService: SMSService;

  constructor() {
    this.emailService = new EmailService();
    this.smsService = new SMSService();
  }

  sendNotification(message: string): void {
    this.emailService.sendEmail(message);
    this.smsService.sendSMS(message);
  }
}

const notificationService = new NotificatioService();
notificationService.sendNotification('Hello, this is a test message!');

/**
 * -----------------------------------------------------
 * Solution for the above violation of the DIP as bellow
 * -----------------------------------------------------
 */
// Abstract interface for notification service
interface INotificationService {
  send(message: string): void;
}

// Email service implementing the notification service interface
class EmailService implements INotificationService {
  send(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

// SMS service implementing the notification service interface
class SMSService implements INotificationService {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

// Notification service depending on the abstraction
class NotificationService {
  private notificationService: INotificationService;

  constructor(notificationService: INotificationService) {
    this.notificationService = notificationService;
  }

  sendNotification(message: string): void {
    this.notificationService.send(message);
  }
}

const emailService = new EmailService();
const notificationServiceEmalil = new NotificationService(emailService);
notificationServiceEmalil.sendNotification(
  'Hello, this is an email test message!'
);

const smsService = new SMSService();
const notificationServiceSms = new NotificationService(smsService);
notificationServiceSms.sendNotification('Hello, this is a sms test message!');
