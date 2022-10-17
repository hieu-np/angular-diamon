import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyVn',
})
export class CurrencyVnPipe implements PipeTransform {
  transform(value: number | string): string {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(Number(value));
  }
}
