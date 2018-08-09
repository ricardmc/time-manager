import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hours Manager';
  week  = [
    {
      'id': 1,
      'start': '2018-08-06T08:00',
      'lunchStart': '2018-08-06T13:00',
      'lunchEnd': '2018-08-06T13:30',
      'end': '2018-08-06T17:00'
    },
    {
      'id': 2,
      'start': '2018-08-07T08:00',
      'lunchStart': '2018-08-07T13:00',
      'lunchEnd': '2018-08-07T13:30',
      'end': '2018-08-07T17:00'
    },
    {
      'id': 3,
      'start': '2018-08-08T08:00',
      'lunchStart': '2018-08-08T13:00',
      'lunchEnd': '2018-08-08T13:30',
      'end': '2018-08-08T17:00'
    },
    {
      'id': 4,
      'start': '2018-08-09T08:00',
      'lunchStart': '2018-08-09T13:00',
      'lunchEnd': '2018-08-09T13:30',
      'end': '2018-08-09T17:00'
    },
    {
      'id': 5,
      'start': '2018-08-10T08:00',
      'lunchStart': '2018-08-10T13:00',
      'lunchEnd': '2018-08-10T13:30',
      'end': '2018-08-10T17:00'
    }
  ];

  constructor () {}

  ngOnInit() {
    for (const day of this.week) {
      day.aggregate = this.calculatesDayAggregate(day);
    }
  }

  protected calculatesDayAggregate(day): number {
    console.log('calculating...');
    console.log(day);
    const dayHourStart = new Date(day.start).getTime();
    const dayHourEnd = new Date(day.end).getTime();
    const dayHourLunchStart = new Date(day.lunchStart).getTime();
    const dayHourLunchEnd = new Date(day.lunchEnd).getTime();

    const lunchTime = dayHourLunchEnd - dayHourLunchStart;

    return this.millisecondsToHours((dayHourEnd - dayHourStart - lunchTime));
  }

  private millisecondsToHours(time): number {
    return time / 1000 / 60 / 60;
  }
}
