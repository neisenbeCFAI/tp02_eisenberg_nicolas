import { Pipe, PipeTransform } from '@angular/core';
import {Produit} from "./produit";

@Pipe({
    name: 'myfilter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: Produit): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.libelle.indexOf(filter.libelle) !== -1);
    }
}
