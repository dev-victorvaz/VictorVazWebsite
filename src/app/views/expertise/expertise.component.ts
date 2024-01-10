import { Component } from '@angular/core';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent {
  openSqlCertificate(): void {
    window.open("https://drive.google.com/file/d/1M5gMYE0-4gY_jqdDpTeAqbGvjmAfy5s_/view?usp=sharing", '_blank');
  }

  openJavaCertificate(): void {
    window.open("https://drive.google.com/file/d/1FDrwPuomlaU9pePVAkpBdaUV709fUsKQ/view?usp=sharing", '_blank');
  }

  openAzureDevOpsCertificate(): void {
    window.open("https://drive.google.com/file/d/1j2dRSHqAZpweYoPuw5w4tYpe8_hYUiwX/view?usp=share_link", '_blank');
  }

}
