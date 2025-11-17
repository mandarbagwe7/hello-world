import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "titlecase"
})
export class TitlecasePipe implements PipeTransform{
    transform(title: string) {
        if(!title){
            return null;
        }

        let words = title.split(" ");

        for(let i = 0; i < words.length; i++){
            if(i > 0 && this.isPreposition(words[i])){
                words[i] = words[i].toLowerCase();
            }
            else{
                words[i] = this.toTitleCase(words[i]);
            }
        }

        return words.join(' ');
    }

    private toTitleCase(word: string):string{
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
    }

    private isPreposition(word: string):boolean {
        let prepositions = [
            "of",
            "the"
        ];
        return prepositions.includes(word.toLowerCase());
    }
}