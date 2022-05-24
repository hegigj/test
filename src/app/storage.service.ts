import { Injectable } from '@angular/core';

interface Service {
  name: string;
  duration: number; // in minutes
}

interface Event {
  id: number;
  title: string;
  start: string;
  end: string;
}

const LOCALSTORAGE_SERVICE = 'barber:services';
const LOCALSTORAGE_EVENT = 'barber:events';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getServices(): Service[] {
    const services: Service[] = JSON.parse(localStorage.getItem(LOCALSTORAGE_SERVICE) || '[]'); // []
    return services;
  }

  getEvents(): Event[] {
    const events: Event[] = JSON.parse(localStorage.getItem(LOCALSTORAGE_EVENT) || '[]');
    return events;
  }

  getEventById(id: number): Event | undefined {
    const events: Event[] = this.getEvents();
    if (!events.length) return undefined;

    return events.find(event => event.id === id);
  }

  addService(service: Service): void {
    const services: Service[] = this.getServices(); // []
    services.push(service);
    localStorage.setItem(LOCALSTORAGE_SERVICE, JSON.stringify(services));
  }

  addEvent(event: Omit<Event, 'id'>): void {
    const events: Event[] = this.getEvents();
    let id: number;
    if (events.length) {
      const lastEvent: Event = events.pop() as Event;
      events.push(lastEvent);
      id = lastEvent.id;
      id++;
    } else {
      id = 1;
    }

    events.push({ ...event, id });

    localStorage.setItem(LOCALSTORAGE_EVENT, JSON.stringify(events));
  }
}
