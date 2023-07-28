import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-afl-two',
  templateUrl: './afl-two.component.html',
  styleUrls: ['./afl-two.component.scss'],
})
export class AflTwoComponent implements OnInit {
  feedbackForm!: FormGroup;
  formData: any;
  constructor(
    private _form: FormService,
    private _fb: FormBuilder,
    private _router: Router
  ) {
    this._form.loginSubject.asObservable().subscribe({
      next: (res: any) => {
        // console.log(res);
        this.formData = res;
        if (this.formData === null) {
          this._router.navigate(['afl-form']);
        }
      },
      error: (err: { error: any }) => {
        console.log(err.error);
      },
    });
  }
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.feedbackForm = this._fb.group({
      i_amount: [this.formData?.i_amount, Validators.required],
      p_amount: [this.formData?.p_amount, Validators.required],
      p_frequency: [this.formData?.p_frequency, Validators.required],
      option: [this.formData?.option, Validators.required],
      acc: [this.formData?.acc, Validators.required],
      acc_name: [this.formData?.acc_name, Validators.required],
      acc_no: [this.formData?.acc_no, Validators.required],
      means: [this.formData?.means, Validators.required],
      b_name: [this.formData?.b_name, Validators.required],
      b_phone_no: [this.formData?.b_phone_no, Validators.required],
      b_address: [this.formData?.b_address, Validators.required],
      b_percentage: [this.formData?.b_percentage, Validators.required],
      b2_name: [this.formData?.b2_name, Validators.required],
      b2_phone_no: [this.formData?.b2_phone_no, Validators.required],
      b2_address: [this.formData?.b2_address, Validators.required],
      b2_percentage: [this.formData?.b2_percentage, Validators.required],
      b3_name: [this.formData?.b3_name, Validators.required],
      b3_phone_no: [this.formData?.b3_phone_no, Validators.required],
      b3_address: [this.formData?.b3_address, Validators.required],
      b3_percentage: [this.formData?.b3_percentage, Validators.required],
      c_sign: ['', Validators.required],
      a_sign: ['', Validators.required],
      terms: [this.formData?.terms, Validators.required],
    });
  }

  email = `
  <!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Investment Form</title>
    <meta name="description" content="Investment Form" />
  </head>
  <style>
    a:hover {
      text-decoration: underline !important;
    }
  </style>

  <body
    marginheight="0"
    topmargin="0"
    marginwidth="0"
    style="margin: 0px; background-color: #f2f3f8"
    leftmargin="0"
  >
    <table
      cellspacing="0"
      border="0"
      cellpadding="0"
      width="100%"
      bgcolor="#f2f3f8"
      style="
        @import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700);
        font-family: 'Open Sans', sans-serif;
      "
    >
      <tr>
        <td>
          <table
            style="background-color: #f2f3f8; max-width: 670px; margin: 0 auto"
            width="100%"
            border="0"
            align="center"
            cellpadding="0"
            cellspacing="0"
          >
            <tr>
              <td style="height: 80px">&nbsp;</td>
            </tr>
            <!-- Logo -->
            <tr>
              <td style="text-align: center">
                <a href="https://addosser.com/" title="logo" target="_blank">
                  <img
                    width="60"
                    src="https://addosser.com/wp-content/uploads/2021/07/logo.png"
                    title="logo"
                    alt="logo"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td style="height: 20px">&nbsp;</td>
            </tr>
            <!-- Email Content -->
            <tr>
              <td>
                <table
                  width="95%"
                  border="0"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    max-width: 670px;
                    background: #fff;
                    border-radius: 3px;
                    -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                    -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                    box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                    padding: 0 40px;
                  "
                >
                  <tr>
                    <td style="height: 40px">&nbsp;</td>
                  </tr>
                  <!-- Title -->
                  <tr>
                    <td style="padding: 0 15px; text-align: center">
                      <h1
                        style="
                          color: #1e1e2d;
                          font-weight: 400;
                          margin: 0;
                          font-size: 32px;
                          font-family: 'Rubik', sans-serif;
                        "
                      >
                        Appointment Reminder
                      </h1>
                      <span
                        style="
                          display: inline-block;
                          vertical-align: middle;
                          margin: 29px 0 26px;
                          border-bottom: 1px solid #cecece;
                          width: 100px;
                        "
                      ></span>
                    </td>
                  </tr>
                  <!-- Details Table -->
                  <tr>
                    <td>
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        style="width: 100%; border: 1px solid #ededed"
                      >
                        <tbody>
                          <tr>
                            <td
                              style="
                                padding: 10px;
                                border-bottom: 1px solid #ededed;
                                border-right: 1px solid #ededed;
                                width: 35%;
                                font-weight: 500;
                                color: rgba(0, 0, 0, 0.64);
                              "
                            >
                              Surname:
                            </td>
                            <td
                              style="
                                padding: 10px;
                                border-bottom: 1px solid #ededed;
                                color: #455056;
                              "
                            >
                            [Surname]
                            </td>
                          </tr>

                          <tr>
                            <td
                              style="
                                padding: 10px;
                                border-bottom: 1px solid #ededed;
                                border-right: 1px solid #ededed;
                                width: 35%;
                                font-weight: 500;
                                color: rgba(0, 0, 0, 0.64);
                              "
                            >
                              Middlename:
                            </td>
                            <td
                              style="
                                padding: 10px;
                                border-bottom: 1px solid #ededed;
                                color: #455056;
                              "
                            >
                            [Middlename]
                            </td>
                          </tr>
                          
                          <tr>
                          <td
                            style="
                              padding: 10px;
                              border-bottom: 1px solid #ededed;
                              border-right: 1px solid #ededed;
                              width: 35%;
                              font-weight: 500;
                              color: rgba(0, 0, 0, 0.64);
                            "
                          >
                            First Name:
                          </td>
                          <td
                            style="
                              padding: 10px;
                              border-bottom: 1px solid #ededed;
                              color: #455056;
                            "
                          >
                          [First Name]
                          </td>
                        </tr>

                  <tr>
                  <td
                    style="
                      padding: 10px;
                      border-bottom: 1px solid #ededed;
                      border-right: 1px solid #ededed;
                      width: 35%;
                      font-weight: 500;
                      color: rgba(0, 0, 0, 0.64);
                    "
                  >
                    Date of Birth:
                  </td>
                  <td
                    style="
                      padding: 10px;
                      border-bottom: 1px solid #ededed;
                      color: #455056;
                    "
                  >
                  [Date of Birth]
                  </td>
                </tr>

                </tbody>
              </table>
            </td>
          </tr>

          <tr>
  <td
    style="
      padding: 10px;
      border-bottom: 1px solid #ededed;
      border-right: 1px solid #ededed;
      width: 35%;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.64);
    "
  >
    Residential Address:
  </td>
  <td
    style="
      padding: 10px;
      border-bottom: 1px solid #ededed;
      color: #455056;
    "
  >
  [Residential Address]
  </td>
</tr>

          <tr>
          <td
            style="
              padding: 10px;
              border-bottom: 1px solid #ededed;
              border-right: 1px solid #ededed;
              width: 35%;
              font-weight: 500;
              color: rgba(0, 0, 0, 0.64);
            "
          >
            Occupation:
          </td>
          <td
            style="
              padding: 10px;
              border-bottom: 1px solid #ededed;
              color: #455056;
            "
          >
          [Occupation]
          </td>
        </tr>

        <tr>
        <td
          style="
            padding: 10px;
            border-bottom: 1px solid #ededed;
            border-right: 1px solid #ededed;
            width: 35%;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.64);
          "
        >
          Phone Number:
        </td>
        <td
          style="
            padding: 10px;
            border-bottom: 1px solid #ededed;
            color: #455056;
          "
        >
        [Phone Number]
        </td>
        </tr>


<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Email:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[Email]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
Bank Verification Number:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[Bank Verification Number]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
Identification Type:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[Identification Type]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
Identification Number:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[Identification Number]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Upload Passport:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[Upload Passport]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    font-weight: 900;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Joint Investment/Trust Details
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Surname:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[j_surname]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Middlename:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[j_mname]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  First Name:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[j_fname]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Date of Birth:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[j_dob]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Residential Address:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[j_address]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Occupation:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[j_occupation]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Phone Number:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[j_phone_no]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Email:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[j_email]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Bank Verification Number:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[j_bvn]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Identification Type:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[j_identification]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Identification Number:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[j_identification_no]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Relationship:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[j_relationship]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Signatory:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[j_signatory]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Upload Passport:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[j_passport]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    font-weight: 900;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Company Details
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Company Name:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[c_company_name]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  RC Number:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[j_rc_no]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Date of Registration:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[c_dor]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  BVN:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[c_bvn]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Residential Address:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[c_residential]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
Type of Investment:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[investment]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Tenure:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[tenure]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
Investment Amount:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[i_amount]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
Payment Amount:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[p_amount]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
Payment Frequency:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[p_frequency]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
Payment Option:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[option]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
Account Name:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[acc]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
Bank Name:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[acc_name]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
Account Number:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[acc_no]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
Means of collecting certificate:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[means]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    font-weight: 900;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Beneficiary
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Title:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[b_title]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Name:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[b_name]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
  Phone Number:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[b_phone_no]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
Percentage:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  " 
>
[b_percentage]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
Residential Address:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[b_address]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
Customer Signature & Date:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[c_sign]
</td>
</tr>

<tr>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    width: 35%;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.64);
  "
>
Authorized Signature & Date:
</td>
<td
  style="
    padding: 10px;
    border-bottom: 1px solid #ededed;
    color: #455056;
  "
>
[a_sign]
</td>
</tr>


</tbody>
</table>
</td>
</tr>

                  <tr>
                    <td style="height: 40px">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="height: 20px">&nbsp;</td>
            </tr>
            <tr>
              <td style="text-align: center">
                <p
                  style="
                    font-size: 14px;
                    color: #455056bd;
                    line-height: 18px;
                    margin: 0 0 0;
                  "
                >
                  &copy; <strong>www.addosserfinance.com</strong>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

  `;

  getData() {
    return this.email
      .replace('[surname]', this.formData[0].surname)
      .replace('[fname]', this.formData[0].fname)
      .replace('[dob]', this.formData[0].dob)
      .replace('[raddress]', this.formData[0].raddress)
      .replace('[occupation]', this.formData[0].occupation)
      .replace('[phone_no]', this.formData[0].phone_no)
      .replace('[email]', this.formData[0].email)
      .replace('[bvn]', this.formData[0].bvn)
      .replace('[identification]', this.formData[0].identification)
      .replace('[identification_no]', this.formData[0].identification_no)
      .replace('[passport]', this.formData[0].passport)
      .replace('[j_surname]', this.formData[0].j_surname)
      .replace('[j_mname]', this.formData[0].j_mname)
      .replace('[j_fname]', this.formData[0].j_fname)
      .replace('[j_dob]', this.formData[0].j_dob)
      .replace('[j_address]', this.formData[0].j_address)
      .replace('[j_occupation]', this.formData[0].j_occupation)
      .replace('[j_phone_no]', this.formData[0].j_phone_no)
      .replace('[j_email]', this.formData[0].j_email)
      .replace('[j_bvn]', this.formData[0].j_bvn)
      .replace('[j_identification]', this.formData[0].j_identification)
      .replace('[j_identification_no]', this.formData[0].j_identification_no)
      .replace('[j_relationship]', this.formData[0].j_relationship)
      .replace('[j_signatory]', this.formData[0].j_signatory)
      .replace('[j_passport]', this.formData[0].j_passport)
      .replace('[c_company_name]', this.formData[0].c_company_name)
      .replace('[j_rc_no]', this.formData[0].j_rc_no)
      .replace('[c_dor]', this.formData[0].c_dor)
      .replace('[c_bvn]', this.formData[0].c_bvn)
      .replace('[c_residential]', this.formData[0].c_residential)
      .replace('[investment]', this.formData[0].investment)
      .replace('[tenure]', this.formData[0].tenure)
      .replace('[i_amount]', this.formData[1].i_amount)
      .replace('[p_amount]', this.formData[1].p_amount)
      .replace('[p_frequency]', this.formData[1].p_frequency)
      .replace('[option]', this.formData[1].option)
      .replace('[acc]', this.formData[1].acc)
      .replace('[acc_name]', this.formData[1].acc_name)
      .replace('[acc_no]', this.formData[1].acc_no)
      .replace('[means]', this.formData[1].means)
      .replace('[b_title]', this.formData[1].b_title)
      .replace('[b_name]', this.formData[1].b_name)
      .replace('[b_phone_no]', this.formData[1].b_phone_no)
      .replace('[b_percentage]', this.formData[1].b_percentage)
      .replace('[b_address]', this.formData[1].b_address)
      .replace('[c_sign]', this.formData[1].c_sign)
      .replace('[a_sign]', this.formData[1].a_sign);
  }

  

  onSubmit() {
    let payload = [];
    payload.push(this.formData);
    payload.push(this.feedbackForm.value);
    console.log(payload);
    this._form.loginSubject.next(payload);
    // this._router.navigate(['afl-two']);

    let realPayload = {
      subject: 'Appointment',
      email_add: [
        // {
        //   email_address: 'peterayebhere@gmail.com',
        //   full_name: 'Peter Eikore',
        // },
        {
          email_address: 'ekundayoolumide1@gmail.com',
          full_name: 'Ekundayo Olumide',
        },
        {
          email_address: 'kachiagu99@gmail.com',
          full_name: 'Kachi Olumide',
        },
      ],
      message_body: this.getData(),
      sender_name: 'Addosser Finance Investment Form',
      sender_mail: 'digiteam@addosser.com',
    };
     console.log(realPayload)
    this._form.onSendMultipleMail(realPayload)
      .subscribe((res) => {
      console.log(res)
    })
  }
}
