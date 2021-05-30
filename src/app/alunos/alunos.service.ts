import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlunoModel } from '../aluno.model';
import { tap } from 'rxjs/operators';
//import {  FormGroup, FormControl, Validators } from '@angular/forms';
//import { NgForm } from '@angular/forms';

@Injectable()
export class AlunosService {

    constructor(private http: HttpClient) {}

    cadastrarAlunos(aluno: AlunoModel): Observable<any> {
        return this.http.post('http://localhost:3000/alunos/', aluno);
    }

    listarAlunos(): Observable<any> {
        return this.http.get('http://localhost:3000/alunos/')
            .pipe(
                tap(console.log)
            );
    }
    

    atualizarAlunos(id: any, aluno:AlunoModel): Observable<any> {
        return this.http.put('http://localhost:3000/alunos/'.concat(id), aluno);
    }

    removerAlunos(id: any): Observable<any> {
        return this.http.delete('http://localhost:3000/alunos/'.concat(id));
    }

}


