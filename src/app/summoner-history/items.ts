export interface Items{
    image: Image;
    description: string;
    itemsrc: string;
}
class Image{
	constructor () {this.full = "";};
	full: string;
}