import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-post',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatFormFieldModule, MatInputModule, MatDividerModule, FormsModule],
  templateUrl: './add-new-post.component.html',
  styleUrl: './add-new-post.component.css'
})
export class AddNewPostComponent {

constructor (private from:MatDialogRef<AddNewPostComponent>){
  
}

  public onCloseForm(){
    this.from.close();
  }

  public onSubmitPost(form:NgForm){
    console.log(form.form.value);

  }

}
