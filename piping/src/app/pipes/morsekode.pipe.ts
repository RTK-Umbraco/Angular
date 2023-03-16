import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'morsekode'
})
export class MorsekodePipe implements PipeTransform {


  morseDictionary: { [key: string]: string } = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.',
    'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
    'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.',
    's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
    'y': '-.--', 'z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.'
  };


  code: string = "";
  transform(value: string, ...args: unknown[]): unknown {


    return this.sentenceToMorse(value);
  }

  sentenceToMorse(sentence: string) : string {

    const words: string[] = sentence.toLowerCase().split(' ');
    const morseWords: string[] = words.map((word: string) => {
      return word.split('').map((char: string) => {
        return this.morseDictionary[char] || char;
      }).join(' ');
    });

    return morseWords.join(' / ');
  }
}
