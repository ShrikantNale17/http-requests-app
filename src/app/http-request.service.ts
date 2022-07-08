import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HttpRequestService {

	constructor(private http: HttpClient) { }

	getPosts() {
		return this.http.get('https://jsonplaceholder.typicode.com/posts')
	}

	createPost(body: any) {
		return this.http.post(`https://jsonplaceholder.typicode.com/posts`, body)
	}

	putPost(body: any) {
		return this.http.put(`https://jsonplaceholder.typicode.com/posts/${body.id}`, body)
	}

	patchPost(body: any) {
		return this.http.patch(`https://jsonplaceholder.typicode.com/posts/${body.id}`, body)
	}

	deletePost(id: number) {
		return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
	}
}
