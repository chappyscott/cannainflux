import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  @Input() @Output() vote = 0;

  constructor() {}

  ngOnInit(): void {}

  handleVote(value: number) {
    this.vote += value;
  }
}
