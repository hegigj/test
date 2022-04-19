import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addRandomEmoji'
})
export class AddRandomEmojiPipe implements PipeTransform {

  transform(value: unknown): string {
    const emojis: string[] = ['❤️', '😃', '😇'];
    const index: number = Math.floor(Math.abs(Math.random() * 10 - 8));
    console.log(index);

    return value + emojis[index];
  }

}
