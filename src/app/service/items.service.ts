import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../interface/items.interface';

@Injectable({
    providedIn: 'root'
})
export class ItemsService {

    constructor(private http: HttpClient) { }

    get() {
        return this.http.get<Items[]>('https://jsonplaceholder.typicode.com/photos');
    }

    delete(id:number) {
        return this.http.delete(`https://jsonplaceholder.typicode.com/photos/${id}`);
    }
}
