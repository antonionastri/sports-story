import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { Root, Team } from '../../model/sport-detail';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ApiService],
})
export class HomeComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  risultati?: Team[]

  inputText: string = '';
  submittedText: string = '';

  private baseUrl =
    'https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=';

  onSubmit() {
    this.submittedText = this.inputText;    
    this.getTeam(this.inputText).subscribe((data) => {
      this.risultati = data.teams;
    });
    this.inputText = '';
  }

  getTeam(name: string): Observable<Root> {
    const word = this.baseUrl + name;
    return this.http.get<Root>(word);
  }
}
