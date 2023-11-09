import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Index, IndexResponse } from './test-request-get';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.css'],
})
export class TestRequestGetComponent implements OnInit {
  indexList: Index[] = [];
  constructor(private http: HttpClient) {}

  data : IndexResponse = {
    count: 0,
    results: []
};

  searchName(name: string){
    this.http
      .get<IndexResponse>('https://www.dnd5eapi.co/api/features?name='+name)
      .subscribe((response) => {
        this.indexList = response.results;
      });
  }

  ngOnInit(): void {
  }
}
