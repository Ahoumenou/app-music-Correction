export class Album {
    constructor(        
        public id: string,
        public ref:string,
        public name:string,
        public title:string,
        public description:string,
        public duration:number,
        public status: string,
        public url?: string,
        public tags?: string[],
        public like?: string,
        ){}

    
};


export class List {
    constructor(
         public id: string,
         public list: string[],
    ){
      this.id = id;
      this.list= [] 
    }

    // "id": string;
    // "list": Array<string>;
}

export interface  SortAlbumCallback {
  (a: Album, b: Album): number
}

export class Info {
  constructor(
    private name : string,
    private email: string
  ){
   this.name = name;
   this.email = email
  }
}