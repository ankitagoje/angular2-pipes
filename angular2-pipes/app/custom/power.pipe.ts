import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'power'
})
export class PowerPipe implements PipeTransform {
    transform(value: number, exponent: string): number {
        let exp = parseInt(exponent);
        return Math.pow(value, exp);
    }
}