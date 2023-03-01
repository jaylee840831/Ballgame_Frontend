export interface Games{
    games:Array<{
      id:number,
      sponsor:string,
      gameName:string,
      courtName:string,
      startDate:Date,
      endDate:Date,
      note:string,
      response:{
        status:number,
        message:string
      }
    }>
}

export interface Game{
  id:number
  sponsor:string
  gameName:string
  courtName:string
  startDate:Date
  endDate:Date
  note:string
}

export interface GamePost{
  sponsor:string
  gameName:string
  courtName:string
  startDate:Date
  endDate:Date
  note:string
}

export class Game{
  id!:number
  sponsor!:string
  gameName!:string
  courtName!:string
  startDate!:Date
  endDate!:Date
  note!:string

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


