import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { RespuestaService } from '../../../shared/services/respuesta.service';
import { ResultadoQuiz } from '../../interfaces/resultado-quiz';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  notificaciones: ResultadoQuiz [] = [];
  public isCollapsed = false;
  constructor(private userService: UserService, private respuestaService: RespuestaService) { }

  ngOnInit() {
    this.getNotificaciones();
  }
  logOut(): void {
    this.userService.logout();
  }
  getNotificaciones(): void {
    this.respuestaService.getResultadosNegativos().subscribe(data => {
      this.notificaciones = data;
    });
  }
}
