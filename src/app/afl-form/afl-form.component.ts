import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';
import { Ng2ImgMaxService } from 'ng2-img-max';


@Component({
  selector: 'app-afl-form',
  templateUrl: './afl-form.component.html',
  styleUrls: ['./afl-form.component.scss'],
})
export class AflFormComponent implements OnInit {
  feedbackForm!: FormGroup;
  formData: any;
  image1: any;
  image2: any;
  image3: any;
  image4: any;
  image5: any;
  image6: any;

  constructor(
    private _form: FormService,
    private _fb: FormBuilder,
    private _router: Router,
    private ng2ImgMax: Ng2ImgMaxService
  ) {
    this._form.loginSubject.asObservable()
      .subscribe({
        next: (res: any) => {
          // console.log(res);
          this.formData = res;
        }, error: (err: { error: any; }) => { console.log(err.error) }

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
      c_residential: [this.formData?.c_residential, Validators.required],
      c_bvn: [this.formData?.c_bvn, Validators.required],
      investment: [this.formData?.investment, Validators.required],
      tenure: [this.formData?.tenure, Validators.required],
    });
  }

  onNext() {
    // console.log(this.feedbackForm.value);
    let payload = {
      email: this.feedbackForm.value.email,
      surname: this.feedbackForm.value.surname,
      mname: this.feedbackForm.value.mname,
      fname: this.feedbackForm.value.fname,
      dob: this.feedbackForm.value.dob,
      occupation: this.feedbackForm.value.occupation,
      raddress: this.feedbackForm.value.raddress,
      phone_no: this.feedbackForm.value.phone_no,
      bvn: this.feedbackForm.value.bvn,
      identification: this.feedbackForm.value.identification,
      identification_no: this.feedbackForm.value.identification_no,
      passport: this.image1,
      j_surname: this.feedbackForm.value.j_surname,
      j_mname: this.feedbackForm.value.j_mname,
      j_fname: this.feedbackForm.value.j_fname,
      j_dob: this.feedbackForm.value.j_dob,
      j_occupation: this.feedbackForm.value.j_occupation,
      j_address: this.feedbackForm.value.j_address,
      j_email: this.feedbackForm.value.j_email,
      j_phone_no: this.feedbackForm.value.j_phone_no,
      j_bvn: this.feedbackForm.value.j_bvn,
      j_identification: this.feedbackForm.value.j_identification,
      j_identification_no: this.feedbackForm.value.j_identification_no,
      j_relationship: this.feedbackForm.value.j_relationship,
      j_signatory: this.image2,
      j_passport: this.image3,
      c_company_name: this.feedbackForm.value.c_company_name,
      j_rc_no: this.feedbackForm.value.j_rc_no,
      c_dor: this.feedbackForm.value.c_dor,
      c_residential: this.feedbackForm.value.c_residential,
      c_bvn: this.feedbackForm.value.c_bvn,
      investment: this.feedbackForm.value.investment,
      tenure: this.feedbackForm.value.tenure,
    }
    this._form.loginSubject.next(payload)
    this._router.navigate(['afl-two']);
  }

  onFileSelected(event: any, type: any) {
    const file: File = event.target.files[0];
    // console.log()
    // let currentSize = `${this._form.getFileSize(file.size)} ${this._form.getFileSizeUnit(file.size)}`
    // console.log(this._form.getFileSize(file.size))
    // console.log(typeof this._form.getFileSize(file.size))
    if ((this._form.getFileSizeUnit(file.size) === 'MB') && (this._form.getFileSize(file.size) >= 7.00)) {
      // console.log(this._form.getFileSizeUnit(file.size))
      if (file) {
        const percentageReduction = 0.95;
        const targetFileSize = file.size * (1 - percentageReduction);
        console.log(targetFileSize)
        const maxSizeInMB = targetFileSize * 0.000001;
        console.log(maxSizeInMB)
        this.compressImage(file, maxSizeInMB, type);
      }
    } else {
      // console.log(this._form.getFileSizeUnit(file.size))
      this.handleUpload(event, type)
    }
  }

  handleUpload(event: any, type: any) {
    const file = event.target.files[0];
    const name = event.target.files[0].name;
    const fileType = event.target.files[0].type;
    // console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let resul;
      resul = reader.result;
      
      console.log(name, fileType);
      if (type === 'passport') {

        this.image1 = {
          "file_type": fileType,
          "file_base64": resul?.toString().split(',')[1],
          "file_name": name
        }
        return;
      }
      if (type === 'j_signatory') {
        this.image2 = {
          "file_type": fileType,
          "file_base64": resul?.toString().split(',')[1],
          "file_name": name
        }
        return;
      }
      if (type === 'j_passport') {
        this.image3 = {
          "file_type": fileType,
          "file_base64": resul?.toString().split(',')[1],
          "file_name": name
        }
        return;
      }
      if (type === 'c_sign') {
        this.image4 = {
          "file_type": fileType,
          "file_base64": resul?.toString().split(',')[1],
          "file_name": name
        }
        return;
      }
      if (type === 'a_sign') {
        this.image5 = {
          "file_type": fileType,
          "file_base64": resul?.toString().split(',')[1],
          "file_name": name
        }
        return;
      }
    };
  }

  compressImage(file: File, maxSizeInMB: number, type: any) {
    // console.log('Compressed')
    this.ng2ImgMax.compressImage(file, maxSizeInMB)
      .subscribe(compressedImage => {
        console.log(compressedImage)
        this.handleUpload(compressedImage, type)
        // Do whatever you want to do with the compressed file, like send to server.
      }, error => {
        console.log(error.reason);
      });
  }

}


