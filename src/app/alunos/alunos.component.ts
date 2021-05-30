import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunosService } from './alunos.service';
import { AlunoModel } from '../aluno.model';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
//import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  //@ViewChild('formulario') public f: NgForm;

  alunos: Array<any> = new Array();
  aluno: AlunoModel = new AlunoModel();

  public formulario: FormGroup = new FormGroup({
    "cpf": new FormControl(null, [Validators.required, Validators.minLength(14), Validators.maxLength(20)]),
    "matricula": new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    "nome": new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    "sexo": new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(9)]),
    "dat_nasc": new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
    "email":new FormControl(null, [Validators.required, Validators.minLength(15), Validators.maxLength(30)]),
    "phone": new FormControl(null, [Validators.required, Validators.minLength(14), Validators.maxLength(20)])
    //"id": new FormControl([null,Validators.required, Validators.minLength(14), Validators.maxLength(20)])
  });
  

  constructor(private alunosService: AlunosService) { }

  ngOnInit() {
    this.listar();
  }

  atualizar(id: number) {
    this.alunosService.atualizarAlunos(id, this.formulario.value).subscribe((aluno) => { 
      this.aluno = new AlunoModel();
      this.listar();
    }
    , (err: any) => console.log('Erro ao atualizar os alunos', err))
  }

  remover(id: number) {
    this.alunosService.removerAlunos(id).subscribe((aluno) => {
      this.aluno = new AlunoModel();
      this.listar();
    }
    , (err: any) => console.log('Erro ao remover o aluno', err))
  }

  cadastrar(){
    this.alunosService.cadastrarAlunos(this.formulario.value).subscribe((aluno: any) => {
      this.aluno = new AlunoModel();
      this.listar();
    }
    , (err) => console.log('Erro ao cadastrar os alunos', err))
  }
      
      
    
    
    
    
    
    //let aluno: AlunoModel = new AlunoModel()

      /*this.f.value.id = aluno.id;
      this.f.value.cpf = aluno.cpf;
      this.f.value.matricula = aluno.matricula;
      this.f.value.nome = aluno.nome;
      this.f.value.sexo = aluno.sexo;
      this.f.value.dat_nasc = aluno.dat_nasc;
      this.f.value.email = aluno.email;
      this.f.value.phone = aluno.phone;

      this.alunos = [
        this.f.value.id, 
        this.f.value.cpf,
        this.f.value.matricula,
        this.f.value.nome,
        this.f.value.sexo,
        this.f.value.dat_nasc,
        this.f.value.email,
        this.f.value.phone
      ]}

      //this.listarAlunos()}
    , (err: any) => console.log('Erro ao cadastrar o aluno', err))
    }*/

  listar(): void {
    this.alunosService.listarAlunos().subscribe((alunos) => 
    this.alunos = alunos
    , (err) => console.log('Erro ao listar os alunos', err))
  }
}


