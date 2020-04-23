export interface Spells{
	key: string;
	name: string;
    image: Image;
	description: string;
	spellurl: string;
}
class Image{
	constructor () {this.full = "";};
	full: string;
}