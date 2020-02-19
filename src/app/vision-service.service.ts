import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class VisionServiceService {

  constructor(private http: HttpClient) { }

  getRemoteData(base64Image): Observable<any> {
    const body = {
      "requests": [
        {
          "image": {
            "content": base64Image
          },
          "features": [
            {
              "type": "WEB_DETECTION"
            }
          ]
        }
      ]
    }
    return this.http.post('https://vision.googleapis.com/v1/images:annotate?key=' + environment.googleCloudVisionAPIKey, body);

  }

  getTitleRequest(url): Observable<any> {
    return this.http.jsonp(url, 'callback');
  }

  getSummaryRequest(url):Observable<any> {
    return this.http.get(url);
  }


}
