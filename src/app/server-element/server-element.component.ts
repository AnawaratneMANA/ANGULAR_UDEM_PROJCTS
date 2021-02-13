import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
  DoCheck,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked,
  OnDestroy {
  @Input('newName') elements: { type: string, name: string, content: string };

  constructor() {
    console.log('constructor called!');
  }


  ngOnChanges(changers: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changers);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

}
