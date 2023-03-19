import { ProfileService } from './../../@services/profile.service';
import { Component } from '@angular/core';
import { userInfoPost } from 'src/app/@modules/user.module';
import { CommonService } from 'src/app/@services/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  response = '';
  imgFile : any;

  profileValue: userInfoPost = {
    email : '',
    height : '0',
    weight : '0',
    name : '',
    pName : '',
    sex : '1',
    position : '1'
    // image : new Uint8Array
  }

  constructor(private commonService : CommonService, private profileService : ProfileService) { }

  ngOnInit(): void {

    this.profileValue.email = localStorage.getItem('email') as string;
    this.loadUserInfo();

  }

  loadUserInfo(){

    this.profileService.getUserInfo(localStorage.getItem('email') as string).subscribe((data: any)=>{

      this.profileValue.name = data.name;

      if(data.sex != null && data.position != null){

        this.profileValue.height = data.height;
        this.profileValue.weight = data.weight;
        this.profileValue.sex = data.sex;
        this.profileValue.position = data.position;

      }

    });

  }

  confirm(){

    this.profileValue.email = localStorage.getItem('email') as string;
    this.profileValue.pName = localStorage.getItem('account') as string;
    $("#message-alert").removeClass("alert-success");
    $("#message-alert").addClass("alert-danger");

    if(this.profileValue.email == "" ||  this.profileValue.height as unknown as number <= 0 || this.profileValue.height as unknown as number > 250 || this.profileValue.weight as unknown as number <= 0 || this.profileValue.weight as unknown as number > 250 
       || this.profileValue.name == "" || this.profileValue.sex == "" || this.profileValue.position == ""){

        this.commonService.showAlert("任一欄位不可為空(大頭照除外)");

    }else{

      // console.log(array);
      // console.log(this.profileValue.image);

      // let formData = new FormData();
      // formData.set("email",this.profileValue.email);
      // formData.set("name",this.profileValue.name);
      // formData.set("pName",this.profileValue.pName);
      // formData.set("sex",this.profileValue.sex);
      // formData.set("height",this.profileValue.height);
      // formData.set("weight",this.profileValue.weight);
      // formData.set("position",this.profileValue.position);
      // formData.set("image",this.imgFile);
      // console.log(formData)

      this.profileService.editUserInfo(this.profileValue).subscribe((data: any)=>{

        if(data.response.status === 1){

          localStorage.setItem('account', data.name);
          $("#message-alert").removeClass("alert-danger");
          $("#message-alert").addClass("alert-success");
          this.commonService.showAlert(data.response.message);

        }else{

          this.commonService.showAlert(data.response.message);

        }

      });

    }

  }

  //照片選取
  file_changed(event : any){

    const element = event.target as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {

      console.log("FileUpload -> files", fileList[0]);
      this.imgFile = fileList[0];
      $("#imgShow").attr({src:URL.createObjectURL(fileList[0])});

    }



  }

}
