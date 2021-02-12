import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;
  let upVoteButton: HTMLButtonElement;
  let downVoteButton: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoteComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;

    upVoteButton = fixture.nativeElement.querySelector('#upvote');
    downVoteButton = fixture.nativeElement.querySelector('#downvote');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize to 0', () => {
    expect(component.vote).toEqual(0);
  });

  // AAA
  // arrange
  // act
  // assert
  it('handleVote(1) should increment vote', () => {
    // arrange

    component.handleVote(1);
    expect(component.vote).toEqual(1);
  });

  it('handleVote(-1) should decrement vote', () => {
    // arrange
    component.vote = 3;
    // act
    component.handleVote(-1);
    // assertion
    expect(component.vote).toEqual(2);
  });

  it('Upvote button clicked calls handlevote', () => {
    // arrange
    spyOn(component, 'handleVote');

    // act
    upVoteButton.click();

    // assert
    expect(component.handleVote).toHaveBeenCalledWith(1);
  });

  it('downvote button clicked calls handlevote', () => {
    // arrange
    spyOn(component, 'handleVote');

    // act
    downVoteButton.click();

    // assert
    expect(component.handleVote).toHaveBeenCalledWith(-1);
  });

  it('Upvote should add 1 to vote count', () => {
    // arrange

    // act
    upVoteButton.click();

    // assert
    expect(component.vote).toEqual(1);
  });

  it('downvote should decrease 1 from vote count', () => {
    // arrange
    component.vote = 1;
    // act
    downVoteButton.click();

    // assert
    expect(component.vote).toEqual(0);
  });

  it.skip('button should be visible', () => {
    expect(fixture.querySelector('#upvote')).toHaveClass('button');
  });
});
