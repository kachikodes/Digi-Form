import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-afl-two',
  templateUrl: './afl-two.component.html',
  styleUrls: ['./afl-two.component.scss'],
})
export class AflTwoComponent implements OnInit {
  feedbackForm!: FormGroup;
  formData: any;
  image1: any;
  image2: any;
  image3: any;
  image4: any;
  image5: any;
  constructor(
    private _form: FormService,
    private _fb: FormBuilder,
    private _router: Router,
    private ng2ImgMax: Ng2ImgMaxService
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
      i_amount: ['', Validators.required],
      p_amount: ['', Validators.required],
      p_frequency: ['', Validators.required],
      option: ['', Validators.required],
      acc: ['', Validators.required],
      acc_name: ['', Validators.required],
      acc_no: ['', Validators.required],
      means: ['', Validators.required],
      b_name: ['', Validators.required],
      b_phone_no: ['', Validators.required],
      b_address: ['', Validators.required],
      b_percentage: ['', Validators.required],
      b_title: ['', Validators.required],
      b2_name: ['', Validators.required],
      b2_phone_no: ['', Validators.required],
      b2_address: ['', Validators.required],
      b2_percentage: ['', Validators.required],
      b3_name: ['', Validators.required],
      b3_phone_no: ['', Validators.required],
      b3_address: ['', Validators.required],
      b3_percentage: ['', Validators.required],
      c_sign: ['', Validators.required],
      a_sign: ['', Validators.required],
      terms: ['', Validators.required],
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
                        Customer's Details
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
                            [surname]
                            </td>
                          </tr>

                          <tr>
                            <td
                              style="
                                padding: 10px;
                                border-bottom: 1px solid #ededed;
                                border-right: 1px solid #ededed;
                                width: 50%;
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
                            [mname]
                            </td>
                          </tr>
                          
                          <tr>
                          <td
                            style="
                              padding: 10px;
                              border-bottom: 1px solid #ededed;
                              border-right: 1px solid #ededed;
                              width: 50%;
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
                          [fname]
                          </td>
                        </tr>

                  <tr>
                  <td
                    style="
                      padding: 10px;
                      border-bottom: 1px solid #ededed;
                      border-right: 1px solid #ededed;
                      width: 50%;
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
                  [dob]
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
  [raddress]
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
          [occupation]
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
        [phone_no]
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
[email]
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
[bvn]
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
[identification]
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
[identification_no]
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
[passport]
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
    console.log(this.formData);
    return this.email
      .replace('[surname]', this.formData.surname)
      .replace('[mname]', this.formData.mname)
      .replace('[fname]', this.formData.fname)
      .replace('[dob]', this.formData.dob)
      .replace('[raddress]', this.formData.raddress)
      .replace('[occupation]', this.formData.occupation)
      .replace('[phone_no]', this.formData.phone_no)
      .replace('[email]', this.formData.email)
      .replace('[bvn]', this.formData.bvn)
      .replace('[identification]', this.formData.identification)
      .replace('[identification_no]', this.formData.identification_no)
      .replace('[passport]', this.formData.passport)
      .replace('[j_surname]', this.formData.j_surname)
      .replace('[j_mname]', this.formData.j_mname)
      .replace('[j_fname]', this.formData.j_fname)
      .replace('[j_dob]', this.formData.j_dob)
      .replace('[j_address]', this.formData.j_address)
      .replace('[j_occupation]', this.formData.j_occupation)
      .replace('[j_phone_no]', this.formData.j_phone_no)
      .replace('[j_email]', this.formData.j_email)
      .replace('[j_bvn]', this.formData.j_bvn)
      .replace('[j_identification]', this.formData.j_identification)
      .replace('[j_identification_no]', this.formData.j_identification_no)
      .replace('[j_relationship]', this.formData.j_relationship)
      .replace('[j_signatory]', this.formData.j_signatory)
      .replace('[j_passport]', this.formData.j_passport)
      .replace('[c_company_name]', this.formData.c_company_name)
      .replace('[j_rc_no]', this.formData.j_rc_no)
      .replace('[c_dor]', this.formData.c_dor)
      .replace('[c_bvn]', this.formData.c_bvn)
      .replace('[c_residential]', this.formData.c_residential)
      .replace('[investment]', this.formData.investment)
      .replace('[tenure]', this.formData.tenure)
      .replace('[i_amount]', this.formData.i_amount)
      .replace('[p_amount]', this.formData.p_amount)
      .replace('[p_frequency]', this.formData.p_frequency)
      .replace('[option]', this.formData.option)
      .replace('[acc]', this.formData.acc)
      .replace('[acc_name]', this.formData.acc_name)
      .replace('[acc_no]', this.formData.acc_no)
      .replace('[means]', this.formData.means)
      .replace('[b_title]', this.formData.b_title)
      .replace('[b_name]', this.formData.b_name)
      .replace('[b_phone_no]', this.formData.b_phone_no)
      .replace('[b_percentage]', this.formData.b_percentage)
      .replace('[b_address]', this.formData.b_address)
      .replace('[c_sign]', this.formData.c_sign)
      .replace('[a_sign]', this.formData.a_sign);
  }

  onFileSelected(event: any, type: any) {
    const file: File = event.target.files[0];
    if (
      this._form.getFileSizeUnit(file.size) === 'MB' &&
      this._form.getFileSize(file.size) >= 7.0
    ) {
      // console.log(this._form.getFileSizeUnit(file.size))
      if (file) {
        const percentageReduction = 0.95;
        const targetFileSize = file.size * (1 - percentageReduction);
        console.log(targetFileSize);
        const maxSizeInMB = targetFileSize * 0.000001;
        console.log(maxSizeInMB);
        this.compressImage(file, maxSizeInMB, type);
      }
    } else {
      // console.log(this._form.getFileSizeUnit(file.size))
      this.handleUpload(event, type);
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
      console.log(name, fileType);
      if (type === 'c_sign') {
        this.image4 = {
          file_type: fileType,
          file_base64: reader.result,
          file_name: name,
        };
        return;
      }
      if (type === 'a_sign') {
        this.image5 = {
          file_type: fileType,
          file_base64: reader.result,
          file_name: name,
        };
        return;
      }
    };
  }

  compressImage(file: File, maxSizeInMB: number, type: any) {
    // console.log('Compressed')
    this.ng2ImgMax.compressImage(file, maxSizeInMB).subscribe(
      (compressedImage) => {
        console.log(compressedImage);
        this.handleUpload(compressedImage, type);
        // Do whatever you want to do with the compressed file, like send to server.
      },
      (error) => {
        console.log(error.reason);
      }
    );
  }

  onSubmit() {
    // payload.push(this.formData);
    // payload.push(this.feedbackForm.value);

    let payload = {
      email: this.formData.email,
      surname: this.formData.surname,
      mname: this.formData.mname,
      fname: this.formData.fname,
      dob: this.formData.dob,
      occupation: this.formData.occupation,
      raddress: this.formData.raddress,
      phone_no: this.formData.phone_no,
      bvn: this.formData.bvn,
      identification: this.formData.identification,
      identification_no: this.formData.identification_no,
      j_surname: this.formData.j_surname,
      j_mname: this.formData.j_mname,
      j_fname: this.formData.j_fname,
      j_dob: this.formData.j_dob,
      j_occupation: this.formData.j_occupation,
      j_address: this.formData.j_address,
      j_email: this.formData.j_email,
      j_phone_no: this.formData.j_phone_no,
      j_bvn: this.formData.j_bvn,
      j_identification: this.formData.j_identification,
      j_identification_no: this.formData.j_identification_no,
      j_relationship: this.formData.j_relationship,
      c_company_name: this.formData.c_company_name,
      j_rc_no: this.formData.j_rc_no,
      c_dor: this.formData.c_dor,
      c_residential: this.formData.c_residential,
      c_bvn: this.formData.c_bvn,
      investment: this.formData.investment,
      tenure: this.formData.tenure,
      // from 2
      i_amount: this.feedbackForm.value.i_amount,
      p_amount: this.feedbackForm.value.p_amount,
      p_frequency: this.feedbackForm.value.p_frequency,
      option: this.feedbackForm.value.option,
      acc: this.feedbackForm.value.acc,
      acc_name: this.feedbackForm.value.acc_name,
      acc_no: this.feedbackForm.value.acc_no,
      means: this.feedbackForm.value.means,
      b_name: this.feedbackForm.value.b_name,
      b_phone_no: this.feedbackForm.value.b_phone_no,
      b_address: this.feedbackForm.value.b_address,
      b_percentage: this.feedbackForm.value.b_percentage,
      b_title: this.feedbackForm.value.b_title,
      b2_name: this.feedbackForm.value.b2_name,
      b2_phone_no: this.feedbackForm.value.b2_phone_no,
      b2_address: this.feedbackForm.value.b2_address,
      b2_percentage: this.feedbackForm.value.b2_percentage,
      b3_name: this.feedbackForm.value.b3_name,
      b3_phone_no: this.feedbackForm.value.b3_phone_no,
      b3_address: this.feedbackForm.value.b3_address,
      b3_percentage: this.feedbackForm.value.b3_percentage,
      terms: this.feedbackForm.value.terms,
    };
    
    this.image1 = this.formData.passport;
    this.image2 = this.formData.j_signatory;
    this.image3 = this.formData.j_passport;

    let attach = {
      passport: this.formData.passport,
      j_signatory: this.formData.j_signatory,
      j_passport: this.formData.j_passport,
      c_sign: this.image4,
      a_sign: this.image5,
    };

    
    // console.log(payload);
    // console.log(attach);
    this._form.loginSubject.next(payload);
    // this._router.navigate(['afl-two']);

    let realPayload = {
      subject: 'Addosser Finance Investment Form',
      email_add: [
       
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
      sender_name: 'AFL',
      sender_mail: 'digiteam@addosser.com',
      email_attachment: [
        this.image1,  
        this.image2,
        this.image3,
        this.image4,
        this.image5,
      ],
    };

    console.log(this.image1,
                this.image2,
                this.image3),

    
    // console.log(this.image1,
    //   this.image2,
    //   this.image3)
    console.log(realPayload);
    this._form.onSendMultipleMailAttachement(realPayload)
    .subscribe((res) => {
      console.log(res);
    });
    return
  }
}
