import { Location } from '../models/Location';


export class LocationService{
  
    
    locations: Array<Location> ;
    
    
    public addLocation(location : Location):Location{
      
      if(!this.isLocationExistsWithLocationName(location.getLocationName())){
          
          this.locations.push(location);
      }else{
        throw new Error("location with location name "+location.getLocationName+" already exists");
      }
      return location;
      
    }
  
    public getLocationByLocationName(locationName : string): Location{
      
      if(this.isLocationExistsWithLocationName(locationName)){
        
         return this.filterLocationsByLocationName(locationName)[0];
      }
      return null;
    }
  
    public isLocationExistsWithLocationName(locationName: string) : boolean{
      
      if(locationName != null && locationName != "" ){
        
        console.log(" location name "+locationName);
        let  filteredLocations:Array<Location> = this.filterLocationsByLocationName(locationName);
        
        if( filteredLocations !=null && filteredLocations.length > 0){
          
          return true;
        }
        
        
      }
      
      return false;
    }
  
    
    public filterLocationsByLocationName(locationName : string):Array<Location> {
      
      return this.locations.filter( location => {
           
           if( location.getLocationName() == locationName){
              return true;
           }else{
             return false;
           }         
          
         });
      
    }
  
}

