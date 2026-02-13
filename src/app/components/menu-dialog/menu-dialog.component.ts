import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewChild,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { TablePlacesComponent } from '../table-places/table-places.component';
import { FoodListComponent } from '../food-list/food-list.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-menu-dialog',
  imports: [
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    TablePlacesComponent,
    FoodListComponent,
  ],
  templateUrl: './menu-dialog.component.html',
  styleUrl: './menu-dialog.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDialogComponent {
  readonly dialogRef = inject(MatDialogRef<MenuDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly animal = model(this.data.animal);
  private _formBuilder = inject(FormBuilder);

  @ViewChild('stepper') stepper!: MatStepper;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: [0, Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  public handleCountStepper(value: number) {
    this.firstFormGroup.controls['firstCtrl'].setValue(value);
    this.stepper.next();

    console.log(this.firstFormGroup.value);
  }
}
