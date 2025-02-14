import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslationPipe } from 'src/app/pipes/translation/translation.pipe';
import { GlobalVariablesService } from 'src/app/services/global-variables/global-variables.service';

@Component({
  selector: 'app-logging-in',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatIconModule,
    MatProgressBarModule,
    TranslationPipe,
    CommonModule
  ],
  templateUrl: './logging-in.component.html',
  styleUrl: './logging-in.component.scss'
})
export class LoggingInComponent {
  constructor(
    public globalVar: GlobalVariablesService
  ) {}
  
}
