import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import {NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TiposMovimientoComponent } from './tipos-movimiento/tipos-movimiento.component';
import { AppRoutingModule } from './/app-routing.module';

import { TiposMovimientoService } from './services/tipos-movimiento-service.service';
import { EntidadesService } from './services/entidades-service.service';
import { GastosService } from './services/gastos-service.service';
import { MenuComponent } from './menu/menu.component';
import { MenuElementComponent } from './menu-element/menu-element.component';
import { TiposDetailComponent } from './tipos-movimiento/tipos-detail/tipos-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TiposNewComponent } from './tipos-movimiento/tipos-new/tipos-new.component';
import { EntidadesComponent } from './entidades/entidades.component';
import { EntidadesDetailComponent } from './entidades/entidades-detail/entidades-detail.component';
import { EntidadesNewComponent } from './entidades/entidades-new/entidades-new.component';
import { GastosComponent } from './gastos/gastos.component';
import { GastosDetailComponent } from './gastos/gastos-detail/gastos-detail.component';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GastosNewReactiveFormComponent } from './gastos/gastos-new-reactive-form/gastos-new-reactive-form.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { ValidateAllFormFieldsService } from './services/validate-all-form-fields.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { GastosMesComponent } from './gastos-mes/gastos-mes.component';
import { SortableColumnComponent } from './sortable-column/sortable-column.component';
import { SortService } from './services/sort.service';
import { SortableTableDirective } from './sortable-table.directive';
import { GroupByPipe } from './pipes/group-by.pipe';
import { GastosResumenComponent } from './gastos-resumen/gastos-resumen.component';
import { NumberToMonthPipe } from './pipes/number-to-month.pipe';
import { EnumToSelectorPipe } from './pipes/enum-to-selector.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { ChartComponentComponent } from './chart-component/chart-component.component';
import { CsvProcessComponent } from './csv-process/csv-process.component';
import { DatePipe } from '@angular/common';
import { GastosMesActualComponent } from './gastos-mes-actual/gastos-mes-actual.component';
import { ResultanteComponent } from './resultante/resultante.component';
import { ConfigFijosMesComponent } from './config-fijos-mes/config-fijos-mes.component';
import { GastoEditComponent } from './gastos/gasto-edit/gasto-edit.component';
import { FijosMesService } from './services/fijos-mes.service';
import { VerticalBarChartComponent } from './chart-component/vertical-bar-chart/vertical-bar-chart.component';
import { LineChartComponent } from './chart-component/line-chart/line-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    TiposMovimientoComponent,
    MenuComponent,
    MenuElementComponent,
    TiposDetailComponent,
    TiposNewComponent,
    EntidadesComponent,
    EntidadesDetailComponent,
    EntidadesNewComponent,
    GastosComponent,
    GastosDetailComponent,
    GastosNewReactiveFormComponent,
    FieldErrorDisplayComponent,
    GastosMesComponent,
    SortableColumnComponent,
    SortableTableDirective,
    GroupByPipe,
    GastosResumenComponent,
    NumberToMonthPipe,
    EnumToSelectorPipe,
    ChartComponentComponent,
    CsvProcessComponent,
    GastosMesActualComponent,
    ResultanteComponent,
    ConfigFijosMesComponent,
    GastoEditComponent,
    VerticalBarChartComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    InfiniteScrollModule,
    NgxChartsModule
  ],
  providers: [ 
    TiposMovimientoService, 
    GastosService,
    EntidadesService, 
    ValidateAllFormFieldsService, 
    SortService, 
    NgbActiveModal, 
    DatePipe,
    FijosMesService],
  entryComponents: [GastosDetailComponent, EntidadesDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
 