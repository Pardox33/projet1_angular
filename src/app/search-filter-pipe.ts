import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    console.log("Transforming...");
    if (!filterText || filterText.trim() === '') return list;
    return list.filter(item =>
      item.nomProduit.toLowerCase().includes(filterText));
      //list ?
  }


}
