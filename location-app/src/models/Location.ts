


export class Location {
  
  private locationId: number ;
  
  private locationName : string;
  
  public getLocationId(): number{
    return this.locationId;
  }
  
  public getLocationName():string{
    return this.locationName;
  }
  
  public setLocationId(locationId : number): void{
     this.locationId=locationId;
  }
  
  public setLocationName(locationName: string):void{
    this.locationName=locationName;
  }
  
  public toString(location: Location): void{
    
    console.log(" Location with location id "+location.getLocationId()+" location name "+location.getLocationName());
  }
  
  
}

