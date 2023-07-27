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
      message_body: this.getData,
      sender_name: 'Atlas Sender',
      sender_mail: 'digiteam@addosser.com',
    };
     console.log(realPayload)
    this._form.onSendMultipleMail(realPayload)
      .subscribe((res) => {
      console.log(res)
    })
  }

  email = `
  <!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Appointment Reminder Email Template</title>
    <meta name="description" content="Appointment Reminder Email Template" />
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
                  &copy; <strong>www.rakeshmandal.com</strong>
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
      .replace('[Appointment ID]', 'Sivuyile Magutywa')
      .replace('[your_name]', 'Paul Dean');
  }
}
