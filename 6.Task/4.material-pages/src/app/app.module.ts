import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialPagesComponent } from './material-pages/material-pages.component';
import { AutoCompleteComponent } from './material-pages/auto-complete/auto-complete.component';
import { BadgeComponent } from './material-pages/badge/badge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule }  from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BottomSheetComponent } from './material-pages/bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './material-pages/button/button.component';
import { ButtomToggleComponent } from './material-pages/buttom-toggle/buttom-toggle.component';
import { CardComponent } from './material-pages/card/card.component';
import { CheckBoxComponent } from './material-pages/check-box/check-box.component';
import { ChipComponent } from './material-pages/chip/chip.component';
import { CoreComponent } from './material-pages/core/core.component';
import { DatepickerComponent } from './material-pages/datepicker/datepicker.component';
import { DialogComponent } from './material-pages/dialog/dialog.component';
import { ExpansionPanelComponent } from './material-pages/expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './material-pages/form-field/form-field.component';
import { GridListComponent } from './material-pages/grid-list/grid-list.component';
import { IconComponent } from './material-pages/icon/icon.component';
import { InputComponent } from './material-pages/input/input.component';
import { MenuComponent } from './material-pages/menu/menu.component';
import { PaginatorComponent } from './material-pages/paginator/paginator.component';
import { ProgressBarComponent } from './material-pages/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './material-pages/progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './material-pages/radio-button/radio-button.component';
import { RipplesComponent } from './material-pages/ripples/ripples.component';
import { SelectComponent } from './material-pages/select/select.component';
import { SideNavComponent } from './material-pages/side-nav/side-nav.component';
import { SlideToggleComponent } from './material-pages/slide-toggle/slide-toggle.component';
import { SliderComponent } from './material-pages/slider/slider.component';
import { SnackBarComponent } from './material-pages/snack-bar/snack-bar.component';
import { SortHeaderComponent } from './material-pages/sort-header/sort-header.component';
import { StepperComponent } from './material-pages/stepper/stepper.component';
import { TableComponent } from './material-pages/table/table.component';
import { TabsComponent } from './material-pages/tabs/tabs.component';
import { ToolBarComponent } from './material-pages/tool-bar/tool-bar.component';
import { TooltipComponent } from './material-pages/tooltip/tooltip.component';
import { TreeComponent } from './material-pages/tree/tree.component';

import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MaterialPagesComponent,
    AutoCompleteComponent,
    BadgeComponent,
    BottomSheetComponent,
    ButtonComponent,
    ButtomToggleComponent,
    CardComponent,
    CheckBoxComponent,
    ChipComponent,
    CoreComponent,
    DatepickerComponent,
    DialogComponent,
    ExpansionPanelComponent,
    FormFieldComponent,
    GridListComponent,
    IconComponent,
    InputComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    RadioButtonComponent,
    RipplesComponent,
    SelectComponent,
    SideNavComponent,
    SlideToggleComponent,
    SliderComponent,
    SnackBarComponent,
    SortHeaderComponent,
    StepperComponent,
    TableComponent,
    TabsComponent,
    ToolBarComponent,
    TooltipComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,

    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
