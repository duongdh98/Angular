import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, from, map, of, catchError, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  totalRoles$ = new BehaviorSubject([]);
  totalPermissions$ = new BehaviorSubject([]);

  /* Gei data  from api */

}
