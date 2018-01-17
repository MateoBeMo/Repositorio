import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ResultadoQuiz } from '../../app/interfaces/resultado-quiz';
import { Respuesta } from '../../app/interfaces/respuesta';

@Injectable()
export class RespuestaService {

resultado: ResultadoQuiz = {
    fecha: 11-11-1111,
    vendedor: "string",
    optometrista: "string",
    entregaGafa: "string",
    numeroVenta: "string",
    respuestas: [   
    { 
        idPregunta: 0,
        namePregunta: "string",
        idRespuesta: 0,
        nameRespuesta: "string",
        valoracion: "string"
    }
    ],
};
   

  constructor(private httpClient: HttpClient, private http: Http ) { }

  upload1(a,b,c,d){
    this.resultado.vendedor = a;
    this.resultado.optometrista = b;
    this.resultado.entregaGafa = c;
    this.resultado.numeroVenta = d;
  }
  upload2(e,f){
      this.resultado.fecha = e;
      this.resultado.respuestas = f;
      console.log(this.resultado);
      this.httpClient.post('http://localhost:3000/resultados',this.resultado).subscribe();
      this.resultado.respuestas.forEach( r => this.httpClient.post('http://localhost:3000/respuestas',r).subscribe() );
  }

  getRespuestas(): Observable<Respuesta[]> {
    return this.httpClient.get<Respuesta[]>('http://localhost:3000/respuestas');
  }

  getResultados(): Observable<ResultadoQuiz[]> {
    return this.httpClient.get<ResultadoQuiz[]>('http://localhost:3000/resultados');
  }

  getResultadosNegativos(): Observable<ResultadoQuiz[]> {
    return this.httpClient.get<ResultadoQuiz[]>('http://localhost:3000/resultados?q=Negativa');
  }
  getResultadosPositivos(): Observable<ResultadoQuiz[]> {
    return this.httpClient.get<ResultadoQuiz[]>('http://localhost:3000/resultados?q=Positiva');
  }
  getResultado(id): Observable<ResultadoQuiz> {
    return this.httpClient.get<ResultadoQuiz>('http://localhost:3000/resultados/'+id);
  }

}