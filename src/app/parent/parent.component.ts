import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit, OnChanges {
  @Input() student: any;
  constructor(public cdf:ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes,"onchanges");
  }

  ngOnInit(): void {
    this.cdf.markForCheck()
    console.log(this.student,"onit");
    
  }

}
