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
    return this.http.get("http://localhost:8000/commande/alljson")
  }

  
  getcomments()
  {
    return this.http.get("http://localhost:8000/oeuvre")
  }
  getSubjectbyID( id)
  {
    
    return this.http.get('http://localhost:8000/commande/subject/'+id)
  }
  getUsers()
  {
    
    return this.http.get('http://localhost:8000/api/users')
  }
  deleteComments(id)
  {
    console.log(id)
    return this.http.post('http://localhost:8000/oeuvre/'+id,{})
  }
  deleteSubject(id)
  {
    console.log(id)
    return this.http.delete('http://localhost:8000/commande/deleteCommandeJSON/'+id)
  }

  addComments(data)
  {
    console.warn(data)
    const subjectId=data.subjectId
    const msg=data.msg
    const createAt=data.createAt
    return  this.http.post(`http://localhost:8000/oeuvre/new?msg=${msg}&idSubject=${subjectId}`,{})
  }

  addsujet(data)
  {
    console.warn(data)
    const title=data.title
    const msg=data.msg
    return  this.http.post(`http://localhost:8000/commande/addCommandejson/new?idClient=1&msg=${msg}&title=${title}`,{})
  }
  alluser()
  {
    return  this.http.get("http://localhost:8000/commande/allusers")
  }
}
