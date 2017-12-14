import { Component, OnInit } from '@angular/core';
import {Robot} from '../models/robot';
import {RobotService} from '../services/robot.service';
import {User} from '../models/user';

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css']
})
export class RobotsComponent implements OnInit {

  robots: Robot[];

  constructor(private robotService: RobotService) { }

  ngOnInit() {
    console.log(`ng onInit`);
    this.getRobots();
  }

  getRobots(): void {
    this.robotService.getRobots().subscribe(robots => this.robots = robots);
  }

  add(title: string, description: string, price: number, user: User): void {
    title = title.trim(); description = description.trim();
    if (!title || !description || (price <= 0) || !user) {
      return;
    }

    this.robotService.addRobot({title, description, price, user} as Robot).subscribe(robot => this.robots.push(robot));
  }

  deleteRobot(robot: Robot): void {
    this.robots = this.robots.filter(r => r !== robot);
    this.robotService.deleteRobot(robot).subscribe();
  }

}
