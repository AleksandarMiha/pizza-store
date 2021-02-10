import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() selectedMenu: any;
  @Output() sendFormValue = new EventEmitter;
  @Output() closeDialog = new EventEmitter;
  menuForm!: FormGroup;
  sizes = ['23', '35', '50'];
  submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.formControl();
  }

  formControl() {
    this.menuForm = this.formBuilder.group({
      id: [this.selectedMenu ? this.selectedMenu.id : ''],
      name: [this.selectedMenu ? this.selectedMenu.name : '', [Validators.required]],
      slug: [this.selectedMenu ? this.selectedMenu.slug : '', Validators.required],
      size: [this.selectedMenu ? this.selectedMenu.size : '', Validators.required],
      price: [this.selectedMenu ? this.selectedMenu.price : '', [Validators.required, Validators.min(0.01)]],
      date: [this.selectedMenu ? this.selectedMenu.price : new Date().toISOString()]
    })
  }

  closeModal() {
    this.closeDialog.emit(this.menuForm.value);
  }

  get f() { return this.menuForm.controls; }

  submitMenuForm() {
    this.submitted = true;
    if (this.menuForm.invalid) { return }

    this.sendFormValue.emit(this.menuForm.value);
  }

  show: boolean = false;
  showModal() {
    this.show = !this.show;
  }


}
