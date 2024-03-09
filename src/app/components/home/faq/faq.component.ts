import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const languageDropdown = document.getElementById('language-btn');
    const faqListItem = document.querySelectorAll('.inner-container ul li');

    if (languageDropdown) {
      languageDropdown.addEventListener('click', () => {
        const languageDropdownContent =
          document.getElementById('language-dropdown');
        if (languageDropdownContent) {
          languageDropdownContent.classList.toggle('show');
        }
      });
    }

    faqListItem.forEach((item) => {
      item.addEventListener('click', (e) => {
        item.classList.toggle('show');
      });
    });
  }
}
