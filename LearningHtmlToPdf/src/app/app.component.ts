import { Component } from '@angular/core';
import html2canva from 'html2canvas';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearningHtmlToPdf';

  generageDocument() {
    var len = 2;
    var pdf = new jsPDF('p', 'mm','a4');
    for (let i = 1;i  <= len; i++){
      html2canva(document.getElementById("seila"+i), {scale: 3}).then(canvas => {

        pdf.addImage(canvas.toDataURL("images/png", 1), 'PNG', 0, 0, 210, 300);

        if (i == len){
            pdf.save('sample-file.pdf');
        }else{
            pdf.addPage();
        }
      });
    }
  }

}
