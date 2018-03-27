import { Component, OnInit, Input } from '@angular/core';
import { EntidadesService } from '../../services/entidades-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-entidades-detail',
  templateUrl: './entidades-detail.component.html',
  styleUrls: ['./entidades-detail.component.css']
})
export class EntidadesDetailComponent implements OnInit {

  @Input() item;
  @Input() showMe;

  constructor(private httpService: EntidadesService,
  private activeModal:NgbActiveModal) { }

  ngOnInit() {
  }

  update(): void{
    this.httpService.updateEntidad(this.item);
    this.showMe = !this.showMe;    
  }

  cierraModal(){
    this.activeModal.close();
  }
}
