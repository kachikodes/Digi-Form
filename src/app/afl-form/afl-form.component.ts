import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-afl-form',
  templateUrl: './afl-form.component.html',
  styleUrls: ['./afl-form.component.scss'],
})
export class AflFormComponent implements OnInit {
  feedbackForm!: FormGroup;
  formData: any;
  constructor(
    private _form: FormService,
    private _fb: FormBuilder,
    private _router: Router
  ) {
    this._form.loginSubject.asObservable()
      .subscribe({
          next: (res: any) => {
            // console.log(res);
        this.formData = res;
          }, error: (err: { error: any; }) => {console.log(err.error)}

    })
  }
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.feedbackForm = this._fb.group({
      email: [this.formData?.email, Validators.email],
      surname: [this.formData?.surname, Validators.required],
      mname: [this.formData?.mname, Validators.required],
      fname: [this.formData?.fname, Validators.required],
      dob: [this.formData?.dob, Validators.required],
      occupation: [this.formData?.occupation, Validators.required],
      postal: [this.formData?.postal, Validators.required],
      raddress: [this.formData?.raddress, Validators.required],
      phone_no: [this.formData?.phone_no, Validators.required],
      bvn: [this.formData?.bvn, Validators.required],
      identification: [this.formData?.identification, Validators.required],
      identification_no: [this.formData?.identification_no, Validators.required],
      passport: ['', Validators.required],
      j_surname: [this.formData?.j_surname, Validators.required],
      j_mname: [this.formData?.j_mname, Validators.required],
      j_fname: [this.formData?.j_fname, Validators.required],
      j_dob: [this.formData?.j_dob, Validators.required],
      j_occupation: [this.formData?.j_occupation, Validators.required],
      j_postal: [this.formData?.j_postal, Validators.required],
      j_address: [this.formData?.j_address, Validators.required],
      j_email: [this.formData?.j_email, Validators.required],
      j_phone_no: [this.formData?.j_phone_no, Validators.required],
      j_bvn: [this.formData?.j_bvn, Validators.required],
      j_identification: [this.formData?.j_identification, Validators.required],
      j_identification_no: [this.formData?.j_identification_no, Validators.required],
      j_relationship: [this.formData?.j_relationship, Validators.required],
      j_signatory: ['', Validators.required],
      j_passport: ['', Validators.required],
      c_company_name: [this.formData?.c_company_name, Validators.required],
      j_rc_no: [this.formData?.j_rc_no, Validators.required],
      c_dor: [this.formData?.c_dor, Validators.required],
      c_postal: [this.formData?.c_postal, Validators.required],
      c_residential: [this.formData?.c_residential, Validators.required],
      c_bvn: [this.formData?.c_bvn, Validators.required],
      investment: [this.formData?.investment, Validators.required],
      tenure: [this.formData?.tenure, Validators.required],
    });
  }

  onNext() {
    // console.log(this.feedbackForm.value);
    this._form.loginSubject.next(this.feedbackForm.value)
    this._router.navigate(['afl-two']);
  }
}
