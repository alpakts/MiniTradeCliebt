import { MatDialogRef } from "@angular/material/dialog";

export class Basedialog<DialogComponent> {
    constructor(public dialogref:MatDialogRef<DialogComponent>,
      ){

    }
    Close(): void {
        this.dialogref.close();
      }
}
