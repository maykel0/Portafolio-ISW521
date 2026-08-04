import { EmailNotification } from "./clases/EmailNotification";
import { SmsNotification } from "./clases/SmsNotification";
import { INotification } from "./interfaces/INotification";
import { NotificationService } from "./services/NotificationService";

const email = new EmailNotification("prueba@gmail.com", "Este es un mensaje de prueba", "Empresa Pio Pio");

const sms = new SmsNotification("+506 88888888", "El codigo de seguridad es: 4999");

const queue: INotification[] = [email, sms];

const service = new NotificationService();

service.processNotNotification(queue);