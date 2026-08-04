import { INotification } from "../interfaces/INotification";

export class NotificationService {
    
    public processNotNotification(notifications: INotification[]):void {
        console.log("...Iniciando proceso en bloques...");

        for(const notification of notifications){
            notification.send();
        }
        console.log("...Finalizacion del proceso...\n\n");
    }
}