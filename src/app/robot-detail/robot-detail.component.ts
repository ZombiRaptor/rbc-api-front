import {Component, Input, OnInit} from '@angular/core';
import {Robot} from '../models/robot';
import {ActivatedRoute} from '@angular/router';
import {RobotService} from '../services/robot.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-robot-detail',
  templateUrl: './robot-detail.component.html',
  styleUrls: ['./robot-detail.component.css']
})
export class RobotDetailComponent implements OnInit {
  @Input() robot: Robot;

  constructor(private route: ActivatedRoute,
              private robotService: RobotService,
              private location: Location) { }

  ngOnInit() {
    this.getRobot();
  }

  getRobot(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.robotService.getRobot(id).subscribe(robot => this.robot = robot);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
  }

}
