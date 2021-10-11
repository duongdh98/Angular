import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteComponent } from './material-pages/auto-complete/auto-complete.component';
import { BadgeComponent } from './material-pages/badge/badge.component';
import { BottomSheetComponent } from './material-pages/bottom-sheet/bottom-sheet.component';
import { ButtomToggleComponent } from './material-pages/buttom-toggle/buttom-toggle.component';
import { ButtonComponent } from './material-pages/button/button.component';
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
import { MaterialPagesComponent } from './material-pages/material-pages.component';
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

const routes: Routes = [
  {
    path: 'material', 
    component: MaterialPagesComponent,
    children: [
      {path: "auto-complete",     component: AutoCompleteComponent},
      {path: "badge",             component: BadgeComponent},
      {path: "bottom-sheet",      component: BottomSheetComponent},
      {path: "button",            component: ButtonComponent},
      {path: "buttom-toggle",     component: ButtomToggleComponent},
      {path: "card",              component: CardComponent},
      {path: "check-box",         component: CheckBoxComponent},
      {path: "chip",              component: ChipComponent},
      {path: "core",              component: CoreComponent},
      {path: "datepicker",        component: DatepickerComponent},
      {path: "dialog",            component: DialogComponent},
      {path: "expansion-panel",   component: ExpansionPanelComponent},
      {path: "form-field",        component: FormFieldComponent},
      {path: "grid-list",         component: GridListComponent},
      {path: "icon",              component: IconComponent},
      {path: "input",             component: InputComponent},
      {path: "menu",              component: MenuComponent},
      {path: "paginator",         component: PaginatorComponent},
      {path: "progress-bar",      component: ProgressBarComponent},
      {path: "progress-spinner",  component: ProgressSpinnerComponent},
      {path: "radio-button",      component: RadioButtonComponent},
      {path: "ripples",           component: RipplesComponent},
      {path: "select",            component: SelectComponent},
      {path: "side-nav",          component: SideNavComponent},
      {path: "slide-toggle",      component: SlideToggleComponent},
      {path: "slider",            component: SliderComponent},
      {path: "snack-bar",         component: SnackBarComponent},
      {path: "sort-header",       component: SortHeaderComponent},
      {path: "stepper",           component: StepperComponent},
      {path: "table",             component: TableComponent},
      {path: "tabs",              component: TabsComponent},
      {path: "tool-bar",          component: ToolBarComponent},
      {path: "tooltip",           component: TooltipComponent},
      {path: "tree",              component: TreeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
