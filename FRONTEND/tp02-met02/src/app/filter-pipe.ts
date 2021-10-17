import { Pipe, PipeTransform } from '@angular/core';
import {Produit} from "./produit";

@Pipe({
    name: 'myfilter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: Produit[], filter: Produit): any {
        if (!items || !filter) {
            return items;
        }
        // @ts-ignore
        return items.filter((item): item is Produit => item !== undefined && item?.libelle.indexOf(filter?.libelle) !== -1);
    }
}
