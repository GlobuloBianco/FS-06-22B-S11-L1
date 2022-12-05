import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Items } from './interface/items.interface';
import { ItemsService } from './service/items.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'S11-Day1';
    sub!: Subscription;
    items: Items[] | undefined;
    likes: number = 0;

    constructor(private http: HttpClient, private itemsSrv: ItemsService) {}
    ngOnInit(): void {
        this.recuperaLista();
    }

    recuperaLista() {
        this.sub = this.itemsSrv.get().subscribe((ris) => {
            console.log(ris);
            this.items = ris;
        });
    }

    elimina = (id: number) => {
        this.sub = this.itemsSrv.delete(id).subscribe(() => {
            this.items = this.items?.filter((item) => item.id != id);
            console.log(`Utente ${id} cancellato`);
        })
    }

    like = () => {
        this.likes++;
    }
}
