import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface Album {
  id: number;
  artist: string;
  album: {
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: any[];
  };
}

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) {}

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) => response.json());
  }
}
