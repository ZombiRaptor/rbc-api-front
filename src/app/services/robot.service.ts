import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Robot} from '../models/robot';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class RobotService {

  private robotsUrl = '/api/robots';

  constructor(private http: HttpClient) { }

  getRobots(): Observable<Robot[]> {
    return this.http.get<Robot[]>(this.robotsUrl);
  }

  getRobot(id: number): Observable<Robot> {
    const url = `${this.robotsUrl}/${id}`;
    return this.http.get<Robot>(url);
  }

  addRobot(robot: Robot): Observable<Robot> {
    return this.http.post<Robot>(this.robotsUrl, robot, httpOptions);
  }

  deleteRobot(robot: Robot | number): Observable<Robot> {
    const id = typeof robot === 'number' ? robot : robot.id;
    const url = `${this.robotsUrl}/${id}`;

    return this.http.delete<Robot>(url, httpOptions);
  }

}
