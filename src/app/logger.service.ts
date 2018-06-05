import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  warn(msg: string): void {
    console.warn(msg)
  }

  error(msg: string): void {
    console.error(msg)
  }

  info(msg: string): void {
    console.info(msg)
  }

  constructor() { }
}
