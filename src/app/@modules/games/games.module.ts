export interface Games{
    games:Array<{
      uid:string,
      sponsor:string,
      gameName:string,
      courtName:string,
      startDate:Date,
      endDate:Date,
      note:string
    }>
}

export interface Game{
  uid:string
  sponsor:string
  gameName:string
  courtName:string
  startDate:Date
  endDate:Date
  note:string
}

export class Game{
  uid!:string
  sponsor!:string
  gameName!:string
  courtName!:string
  startDate!:Date
  endDate!:Date
  note!:string

  constructor(){}

  // constructor(  
  //   uid:string,
  //   sponsor:string,
  //   gameName:string,
  //   courtName:string,
  //   startDate:Date,
  //   endDate:Date,
  //   note:string){
  //     this.uid=uid;
  //     this.sponsor=sponsor;
  //     this.gameName=gameName;
  //     this.courtName=courtName;
  //     this.startDate=startDate;
  //     this.endDate=endDate;
  //     this.note=note;
  //   }
}


