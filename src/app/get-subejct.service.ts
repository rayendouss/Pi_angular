import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetSubejctService {

  constructor( private http:HttpClient) { }

  apiCall()
  {
    return this.http.get("http://localhost:8000/api/subjects")
  }

  getcomments()
  {
    return this.http.get("http://localhost:8000/api/comments")
  }
  getSubjectbyID( id)
  {
    
    return this.http.get('http://localhost:8000/api/subjects/',id)
  }
  getUsers()
  {
    
    return this.http.get('http://localhost:8000/api/users')
  }
  deleteComments(id)
  {
    console.log(id)
    return this.http.delete('http://localhost:8000/api/comments/'+id)
  }

  addComments(data)
  {
    console.warn(data)
    const subjectId=data.subjectId
    const msg=data.msg
    const createAt=data.createAt
    return this.http.post('http://localhost:8000/api/comments',
    {msg,subjectId,createAt})
  }
}
