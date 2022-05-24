import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {StudentModel} from "../models/student.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly url: string

  constructor(private httpClient: HttpClient) {
    this.url = `${environment.baseUrl}/students`;
  }

  getList(): Observable<StudentModel[]> {
    return this.httpClient
      .get<StudentModel[]>(this.url);
  }

  get(id: number): Observable<StudentModel> {
    return this.httpClient
      .get<StudentModel>(`${this.url}/${id}`);
  }

  create(model: Omit<StudentModel, 'id'>): Observable<any> {
    return this.httpClient.post(this.url, model);
  }
}
