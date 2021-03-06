import { YoutubeActions } from './../../redux/actions/youtube.actions';
import { Store } from '@ngrx/store';
import { retry, Observable, catchError, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ISearchResponse } from 'src/app/youtube/components/search/models/search-response.model';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient, private store: Store) {}

  public videoIdArray: string[] = [];

  private url = 'https://www.googleapis.com/youtube/v3/search';

  private urlVideo = 'https://www.googleapis.com/youtube/v3/videos';

  getDataRequest(content: string): Observable<ISearchResponse> {
    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', 10)
      .set('q', content);

    return this.httpClient.get<ISearchResponse>(this.url, { params }).pipe(
      retry(4),
      catchError((error) => {
        console.log('[ERROR]: ', error);
        return EMPTY;
      }),
    );
  }

  getVideoDataRequest(idList: string) {
    const params = new HttpParams().set('id', idList).set('part', 'snippet,statistics');

    return this.httpClient.get<ISearchResponse>(this.urlVideo, { params }).pipe(
      retry(4),
      catchError((error) => {
        console.log('[ERROR]: ', error);
        return EMPTY;
      }),
    );
  }

  loadData(content: string) {
    this.getDataRequest(content).subscribe((response) => {
      response.items.forEach((elem) => this.videoIdArray.push(elem.id.videoId));
      this.getVideoDataRequest(this.videoIdArray.join()).subscribe((newResponse) => {
        this.store.dispatch(YoutubeActions.get({ newResponse }));
        this.videoIdArray = [];
      });
    });
  }
}
