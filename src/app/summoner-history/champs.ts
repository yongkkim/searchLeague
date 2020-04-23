export interface Champs{
	key: string;
	name: string;
	image: Image;
}
class Image{
	constructor () {this.full = "";};
	full: string;
}