import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VisionServiceService } from '../vision-service.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';




@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})

export class DetailPage implements OnInit {

  wikiTerm;
  wikiSummary;
  wikiSummaryArray;
  wikiSummaryJson;
  speakingFlag: boolean = false;
  speakOriginalColor;
  speakOriginalColorFlag: boolean = true;

  constructor(private route: ActivatedRoute,
    private visionService: VisionServiceService,
    private tts: TextToSpeech,
    // private ttsOptins: TTSOptions,
  ) { }

  ngOnInit() {
    this.wikiTerm = this.route.snapshot.paramMap.get('keyword');
    this.goWiki(this.wikiTerm);

  }

  async goWiki(term) {
    const basewikiSummaryUrl = 'https://en.wikipedia.org/api/rest_v1/page/mobile-sections/';
    term = term.replace(/\s+/g, '_')
    let url = basewikiSummaryUrl + term;
    console.log(url);

    await this.visionService.getSummaryRequest(url)
      .subscribe((result) => {

        this.wikiSummaryJson = result;
        console.log(this.wikiSummaryJson);
        this.wikiSummary = this.wikiSummaryJson.lead.sections[0].text;
        console.log(this.wikiSummary);
        this.repairLink();
        this.wikiSummaryArray = this.splitWikiContent();
        console.log("this.wikiSummaryArray ::: " + this.wikiSummaryArray);
        this.showWikiSummary();
      }, (err) => {
        console.error(err);
      });

  }

  repairLink() {
    let regex = /(<a href=\")/g;
    // let v = this.wikiSummary.match(regex);
    this.wikiSummary = this.wikiSummary.replace(regex, '<a href="https://en.wikipedia.org')
  }


  showWikiSummary() {
    // document.getElementById("demo").innerHTML = this.wikiSummary;
    // ####
    document.getElementById("first-card").innerHTML = this.wikiSummaryArray[0];
    document.getElementById("second-card").innerHTML = this.wikiSummaryArray[1];
    document.getElementById("third-card").innerHTML = this.wikiSummaryArray[2];


  }



  speak(speakContent: string, iconID) {
    let speakingButton = document.getElementById(iconID);
    this.changeColor(speakingButton);
    if (this.speakingFlag) {
      this.stopSpeaking();
    } else {
      this.speakingFlag = true;
      const TTSOptions = {
        /** text to speak */
        text: speakContent,
        /** a string like 'en-US', 'zh-CN', etc */
        locale: 'en-US',
        /** speed rate, 0 ~ 1 */
        rate: 1,
      };

      this.tts.speak(TTSOptions)
        .then(() => {
          console.log('Success');
        })
        .catch((reason: any) => console.log(reason));
    }
  }

  changeColor(element) {
    if (this.speakOriginalColorFlag){
      this.speakOriginalColor = element.style.color;
      this.speakOriginalColorFlag = false;
    }
    if(element.style.color == this.speakOriginalColor){
      element.style.color = 'orange';
    }else{
      element.style.color = this.speakOriginalColor;
    }
  }

  stopSpeaking() {
    this.tts.speak("");
    this.speakingFlag = false;
  }

  splitWikiContent() {
    // let regex = /(\r\n|\r|\n){2}/g;
    let regex = /\n\n/g;
    // let regex = /(<table|<\/table>)/g;
    // let regex = /(<\/p>)/g;


    let result = this.wikiSummary.split(regex);
    result = result.filter(function (entry) { return entry.trim() != ''; });
    console.log(result);
    return result;
  }

  deleteTag(sentences) {
    let regexTag = /<[^>]*>/g;
    return sentences.replace(regexTag, '');
  }

}
