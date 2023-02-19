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
